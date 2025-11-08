// src/Pages/BookingDetailsPage.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const roomTypes = [
  { name: "DELUXE SUITE", price: 100 },
  { name: "JUNIOR SUITE", price: 150 },
  { name: "EXECUTIVE SUITE", price: 200 },
  { name: "PRESIDENTIAL SUITE", price: 300 },
];

const countries = [
  { name: "Bhutan", code: "+975" },
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  // ... Add remaining countries as needed
];

const BookingDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { booking } = location.state || {};

  const [bookingStatus, setBookingStatus] = useState(booking?.status);
  const [journalInput, setJournalInput] = useState(booking?.journalNumber || "");
  const [selectedRoomType, setSelectedRoomType] = useState(booking?.type || "");
  const [selectedRoomNo, setSelectedRoomNo] = useState(booking?.roomNo || "");
  const [checkInDate, setCheckInDate] = useState(booking?.checkIn ? new Date(booking.checkIn) : null);
  const [checkOutDate, setCheckOutDate] = useState(booking?.checkOut ? new Date(booking.checkOut) : null);
  const [adults, setAdults] = useState(booking?.adults || 1);
  const [children, setChildren] = useState(booking?.children || 0);
  const [firstName, setFirstName] = useState(booking?.firstName || "");
  const [lastName, setLastName] = useState(booking?.lastName || "");
  const [email, setEmail] = useState(booking?.email || "");
  const [country, setCountry] = useState(booking?.country || countries[0].name);
  const [phoneCode, setPhoneCode] = useState(
    booking?.phoneCode || countries.find(c => c.name === (booking?.country || countries[0].name))?.code
  );
  const [phone, setPhone] = useState(booking?.phone || "");
  const [specialRequest, setSpecialRequest] = useState(booking?.specialRequest || "");
  const [roomPrice, setRoomPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const room = roomTypes.find(r => r.name === selectedRoomType);
    const price = room ? room.price : 0;
    setRoomPrice(price);

    if (checkInDate && checkOutDate) {
      const diffTime = Math.max(checkOutDate - checkInDate, 0);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setTotalPrice(diffDays * price);
    } else {
      setTotalPrice(price);
    }
  }, [selectedRoomType, checkInDate, checkOutDate]);

  if (!booking) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-700">No booking selected.</h2>
        <button
          className="mt-4 px-4 py-2 bg-green-600 text-white"
          onClick={() => navigate("/booking", { state: { activeTab: "AVAILABLE" } })}
        >
          Go Back
        </button>
      </div>
    );
  }

  const validateField = (field, value) => {
    let message = "";
    switch (field) {
      case "firstName":
      case "lastName":
        if (!value.trim()) message = "This field is required.";
        break;
      case "email":
        if (!value.trim()) message = "Email is required.";
        else if (!/^\S+@\S+\.\S+$/.test(value)) message = "Email is invalid.";
        break;
      case "selectedRoomType":
        if (!value) message = "Select a room type.";
        break;
      case "selectedRoomNo":
        if (!value.trim()) message = "Room number is required.";
        break;
      case "checkInDate":
        if (!value) message = "Check-in date is required.";
        break;
      case "checkOutDate":
        if (!value) message = "Check-out date is required.";
        else if (checkInDate && value <= checkInDate) message = "Check-out must be after check-in.";
        break;
      case "adults":
        if (!value || value < 1) message = "At least one adult is required.";
        break;
      case "phone":
        if (!value.trim()) message = "Phone number is required.";
        break;
      case "journalInput":
        if (!value.trim()) message = "Journal number is required.";
        break;
      default:
        break;
    }
    setErrors(prev => ({ ...prev, [field]: message }));
  };

  const inputClass = field =>
    `mt-1 border px-3 py-2 w-full focus:outline-none focus:ring-2 ${errors[field] ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-green-300"}`;

  const handleConfirmBooking = async (e) => {
    e.preventDefault();

    const fields = [
      "firstName",
      "lastName",
      "email",
      "selectedRoomType",
      "selectedRoomNo",
      "checkInDate",
      "checkOutDate",
      "adults",
      "phone",
      "journalInput"
    ];

    let allValid = true;
    fields.forEach(f => {
      const value = eval(f);
      validateField(f, value);
      if (!value || (typeof value === "string" && value.trim() === "")) allValid = false;
      if (f === "email" && value && !/^\S+@\S+\.\S+$/.test(value)) allValid = false;
      if (f === "checkOutDate" && checkInDate && value && value <= checkInDate) allValid = false;
      if (f === "adults" && value < 1) allValid = false;
    });

    if (!allValid) return; // only show inline errors, do not show alert

    const result = await Swal.fire({
      title: "Confirm Booking?",
      text: "Are you sure you want to confirm this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#008000",
      color: "#fff",
      background: "#006600",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    });

    if (result.isConfirmed) {
      setBookingStatus("BOOKED");
      await Swal.fire({
        title: "Success!",
        text: "The booking has been confirmed.",
        icon: "success",
        confirmButtonColor: "#008000",
        color: "#fff",
        background: "#006600",
      });
      navigate("/booking", { state: { activeTab: "BOOKED" } });
    }
  };

  const handleCheckIn = async () => {
    const result = await Swal.fire({
      title: "Check-In Booking?",
      text: "Are you sure you want to check-in this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#008000",
      color: "#fff",
      background: "#006600",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    });

    if (result.isConfirmed) {
      setBookingStatus("CHECKED_IN");
      await Swal.fire({
        title: "Checked In!",
        text: "The booking has been checked-in.",
        icon: "success",
        confirmButtonColor: "#008000",
        color: "#fff",
        background: "#006600",
      });
      navigate("/booking", { state: { activeTab: "BOOKED" } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-2 relative">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-6 text-[#006600]">
          {bookingStatus} Booking Details
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Back
        </button>
      </div>

      {bookingStatus === "AVAILABLE" ? (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleConfirmBooking}>
          {/* Room Info */}
          <div className="bg-white shadow p-4 ">
            <h2 className="text-xl font-bold mb-2 py-2">Room Information</h2>
            <div className="space-y-4">
              {/* Room Type */}
              <div>
                <label className="font-semibold">Room Type:</label>
                <select
                  className={inputClass("selectedRoomType")}
                  value={selectedRoomType}
                  onChange={e => {
                    setSelectedRoomType(e.target.value);
                    validateField("selectedRoomType", e.target.value);
                  }}
                >
                  <option value="">Select Room Type</option>
                  {roomTypes.map((r, idx) => (
                    <option key={idx} value={r.name}>
                      {r.name} (${r.price}/night)
                    </option>
                  ))}
                </select>
                {errors.selectedRoomType && <p className="text-red-500 text-sm">{errors.selectedRoomType}</p>}
              </div>

              {/* Room Number */}
              <div>
                <label className="font-semibold">Room Number:</label>
                <input
                  type="text"
                  value={selectedRoomNo}
                  onChange={e => { setSelectedRoomNo(e.target.value); validateField("selectedRoomNo", e.target.value); }}
                  placeholder="Enter room number"
                  className={inputClass("selectedRoomNo")}
                />
                {errors.selectedRoomNo && <p className="text-red-500 text-sm">{errors.selectedRoomNo}</p>}
              </div>

              {/* Check-In & Check-Out */}
              <div className="flex flex-col w-full">
                <label className="font-semibold mb-1">Check-In:</label>
                <DatePicker
                  selected={checkInDate}
                  onChange={date => { setCheckInDate(date); validateField("checkInDate", date); }}
                  className={inputClass("checkInDate")}
                  placeholderText="Select check-in date"
                  minDate={new Date()}
                />
                {errors.checkInDate && <p className="text-red-500 text-sm">{errors.checkInDate}</p>}
              </div>

              <div className="flex flex-col w-full mt-4">
                <label className="font-semibold mb-1">Check-Out:</label>
                <DatePicker
                  selected={checkOutDate}
                  onChange={date => { setCheckOutDate(date); validateField("checkOutDate", date); }}
                  className={inputClass("checkOutDate")}
                  placeholderText="Select check-out date"
                  minDate={checkInDate || new Date()}
                />
                {errors.checkOutDate && <p className="text-red-500 text-sm">{errors.checkOutDate}</p>}
              </div>

              {/* Adults & Children */}
              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="font-semibold">Adults:</label>
                  <input
                    type="number"
                    min="1"
                    value={adults}
                    onChange={e => { setAdults(parseInt(e.target.value)); validateField("adults", parseInt(e.target.value)); }}
                    className={inputClass("adults")}
                  />
                  {errors.adults && <p className="text-red-500 text-sm">{errors.adults}</p>}
                </div>
                <div className="flex-1">
                  <label className="font-semibold">Children:</label>
                  <input
                    type="number"
                    min="0"
                    value={children}
                    onChange={e => setChildren(parseInt(e.target.value))}
                    className="mt-1 border border-gray-300 px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
                  />
                </div>
              </div>

              <p className="font-semibold mt-2">Room Price: ${roomPrice} / night</p>
              <p className="font-semibold">Total Price: ${totalPrice}</p>
            </div>
          </div>

          {/* Guest Info */}
          <div className="bg-white shadow p-4 ">
            <h2 className="text-xl font-bold mb-2 py-2">Guest Information</h2>
            <div className="space-y-4">
              {/* First Name */}
              <div>
                <label className="font-semibold">First Name:</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={e => { setFirstName(e.target.value); validateField("firstName", e.target.value); }}
                  className={inputClass("firstName")}
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>

              {/* Last Name */}
              <div>
                <label className="font-semibold">Last Name:</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={e => { setLastName(e.target.value); validateField("lastName", e.target.value); }}
                  className={inputClass("lastName")}
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="font-semibold">Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); validateField("email", e.target.value); }}
                  className={inputClass("email")}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Country & Phone */}
              <div>
                <label className="font-semibold">Country:</label>
                <select
                  value={country}
                  onChange={e => {
                    const sel = e.target.value;
                    setCountry(sel);
                    const found = countries.find(c => c.name === sel);
                    if (found) setPhoneCode(found.code);
                  }}
                  className="mt-1 border border-gray-300 px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  {countries.map((c, idx) => (
                    <option key={idx} value={c.name}>{c.name} ({c.code})</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2">
                <div className="flex-1">
                  <label className="font-semibold">Phone Code:</label>
                  <input type="text" value={phoneCode} readOnly className="mt-1 border border-gray-300 px-3 py-2 w-full bg-gray-100" />
                </div>
                <div className="flex-1">
                  <label className="font-semibold">Phone Number:</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={e => { setPhone(e.target.value); validateField("phone", e.target.value); }}
                    className={inputClass("phone")}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
              </div>

              {/* Journal & Special Request */}
              <div>
                <label className="font-semibold">Journal Number:</label>
                <input
                  type="text"
                  value={journalInput}
                  onChange={e => { setJournalInput(e.target.value); validateField("journalInput", e.target.value); }}
                  className={inputClass("journalInput")}
                />
                {errors.journalInput && <p className="text-red-500 text-sm">{errors.journalInput}</p>}
              </div>

              <div>
                <label className="font-semibold">Special Request:</label>
                <textarea
                  value={specialRequest}
                  onChange={e => setSpecialRequest(e.target.value)}
                  placeholder="Enter any special requests"
                  className="mt-1 border border-gray-300 px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-[#006600] text-white px-6 py-2 shadow hover:bg-green-800 transition w-full"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </form>
      ) : (
        // Display for BOOKED / CHECKED_IN / PENDING
        <div className="bg-white shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div className="col-span-1 md:col-span-2"><p><strong>Booking No:</strong> {booking.bookingNo}</p></div>
          <p><strong>Name:</strong> {firstName} {lastName}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Country:</strong> {country}</p>
          <p><strong>Phone:</strong> {phoneCode} {phone}</p>
          <p><strong>Room Type:</strong> {selectedRoomType}</p>
          {bookingStatus !== "PENDING" && <p><strong>Room No:</strong> {selectedRoomNo}</p>}
          <p><strong>Check-In:</strong> {checkInDate?.toLocaleDateString()}</p>
          <p><strong>Check-Out:</strong> {checkOutDate?.toLocaleDateString()}</p>
          <p><strong>Adults:</strong> {adults}</p>
          <p><strong>Children:</strong> {children}</p>
          <p><strong>Total Price:</strong> ${totalPrice}</p>
          <p><strong>Special Request:</strong> {specialRequest || "None"}</p>

          {bookingStatus === "BOOKED" && (
            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
              <button
                className="bg-[#006600] text-white px-6 py-2 shadow hover:bg-green-800 transition w-2/5"
                onClick={handleCheckIn}
              >
                Check-In
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingDetailsPage;
