import React, { useState } from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const BookingDetails = () => {
  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState({
    checkIn: "Thu, Sep 04, 2025",
    checkOut: "Sun, Sep 07, 2025",
    nights: 3,
    rooms: [
      { name: "Deluxe Room", price: 9600, quantity: 1 },
      { name: "Junior Suite", price: 7600, quantity: 0 },
    ],
  });

  const countries = ["Bhutan","India","Nepal","Bangladesh","Thailand","China","Japan","Australia","United Kingdom","United States"];
  const phoneCodes = ["+975","+91","+977","+880","+66","+86","+81","+61","+44","+1"];

  const updateRoomQuantity = (index, quantity) => {
    setBookingData((prev) => {
      const updatedRooms = [...prev.rooms];
      updatedRooms[index].quantity = parseInt(quantity) || 0;
      return { ...prev, rooms: updatedRooms };
    });
  };

  const totalAmount = bookingData.rooms.reduce(
    (total, room) => total + room.price * room.quantity,
    0
  );

  const handleBooking = (e) => {
    e.preventDefault();

    Swal.fire({
      html: `<p style="color:#d3ffd3; font-size:16px;">Do you want to confirm this booking?</p>`,
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#008000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
      background: "#006600",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          html: `<p style="color:#d3ffd3; font-size:16px;">Your booking request has been submitted. Our team will contact you shortly to confirm payment through email and finalize your stay.</p>`,
          title: "Booking Request Sent!",
          icon: "success",
          confirmButtonColor: "#008000",
          background: "#006600",
                color: "#fff",

        });
        navigate("/room");
      }
    });
  };

  return (
    <section>
      <BreadCrumb title="booking details" />
      <div className="min-h-screen bg-white py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* LEFT COLUMN */}
          <div className="w-full bg-[#F9F9F9] md:w-1/3 border border-gray-200 -md p-5 shadow-sm text-sm">
            <h3 className="font-semibold text-lg mb-4">Your booking details</h3>
            <div className="flex justify-between items-start text-gray-700 mb-4">
              <div className="w-1/2">
                <p className="font-medium mb-1">Check-in</p>
                <p>{bookingData.checkIn}</p>
                <p>From 3:00 PM</p>
              </div>
              <div className="w-[1px] bg-gray-300 mx-3"></div>
              <div className="w-1/2">
                <p className="font-medium mb-1">Check-out</p>
                <p>{bookingData.checkOut}</p>
                <p>Until 12:00 PM</p>
              </div>
            </div>
            <p className="mb-4 text-gray-700">
              Total length of stay: <span className="font-medium">{bookingData.nights} nights</span>
            </p>
            <hr className="my-3" />
            <p className="font-medium mb-1">Room</p>
            {bookingData.rooms.map((room, index) => (
              <div key={index} className="flex justify-between">
                <p>{room.name} x {room.quantity}</p>
                <p>BTN {(room.price * room.quantity).toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">Total</p>
              <p className="text-green-600 font-bold text-2xl">
                BTN {totalAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full md:w-2/3 text-sm">
            <h3 className="font-semibold text-lg mb-4">Enter your details</h3>
            <form className="space-y-6" onSubmit={handleBooking}>
              {/* Name fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Enter first name"
                    className="w-full border border-gray-300 -md px-3 py-2 mt-1 focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-[#808080]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Enter last name"
                    className="w-full border border-gray-300 -md px-3 py-2 mt-1 focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-[#808080]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 -md px-3 py-2 mt-1 focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-[#808080]"
                />
              </div>

{/* Country/Region */}
<div>
  <label className="block text-gray-700 font-medium">Country/Region</label>
  <div className="flex gap-2 flex-wrap">
    <select className="flex-1 min-w-[150px] border border-gray-300 -md px-3 py-2 focus:ring-1 focus:ring-green-500 focus:outline-none">
      {countries.map((country) => (
        <option key={country}>{country}</option>
      ))}
    </select>
  </div>
</div>
              <div>
                <label className="block text-gray-700 font-medium">Country/Region</label>
                <select className="w-full border border-gray-300 -md px-3 py-2 mt-1 focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-[#808080]">
                  {countries.map((country) => <option key={country}>{country}</option>)}
                </select>
              </div>

{/* Phone number with responsive dropdowns */}
<div>
  <label className="block text-gray-700 font-medium">
    Phone number <span className="text-red-500">*</span>
  </label>
  <div className="flex gap-2 flex-wrap">
    <select className="flex-[1_1_30%] min-w-[80px] border border-gray-300 -md px-2 py-2 focus:ring-1 focus:ring-green-500 focus:outline-none">
      {phoneCodes.map((code) => (
        <option key={code}>{code}</option>
      ))}
    </select>
    <input
      type="text"
      name="phone"
      required
      placeholder="Enter phone number"
      className="flex-[2_1_65%] min-w-[150px] border border-gray-300 -md px-3 py-2 focus:ring-1 focus:ring-green-500 focus:outline-none"
    />
  </div>
</div>

              {/* Room selection */}
              <div>
                <h4 className="font-semibold mb-2">Room Selection</h4>
                <div className="flex gap-6">
                  {bookingData.rooms.map((room, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <label>{room.name}</label>
                      <input
                        type="number"
                        min="0"
                        value={room.quantity}
                        onChange={(e) => updateRoomQuantity(index, e.target.value)}
                        className="w-16 border border-gray-300 -md px-2 py-1 text-center"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Types of Meals */}
              <div>
                <h4 className="font-semibold mb-2">Types of Meals</h4>
                <div className="flex flex-col gap-2">
                  {["Breakfast","Lunch","Dinner"].map((meal) => (
                    <label key={meal} className="flex items-center gap-2">
                      <input type="checkbox" />
                      <span>{meal}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Request */}
              <div>
                <h4 className="font-semibold mb-2">Special Request</h4>
                <textarea
                  rows="3"
                  placeholder="Write your request here..."
                  className="w-full border border-gray-300 -md px-3 py-2 focus:ring-1 focus:ring-green-500 focus:outline-none placeholder:text-[#808080]"
                ></textarea>
              </div>

              {/* Note */}
              <p className="text-xs text-gray-500 leading-relaxed">
                Please note: This is a booking request. Our team will contact you
                by email/phone to confirm availability and arrange payment. Your
                booking will be finalized once payment is received.
              </p>

              {/* Confirm Booking Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-[#006600] text-white font-semibold py-3 -md hover:bg-green-700 transition"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingDetails;
