import { BsArrowLeft, BsArrowRight, BsCheck2 } from "react-icons/bs";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaDollarSign, FaVectorSquare, FaUserFriends, FaBed, FaWater } from "react-icons/fa";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RoomDetails = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const location = useLocation();
  const bookingsData = location.state && location.state;

  const navigate = useNavigate();
  const images = [
    "/images/inner/room1.jpeg",
    "/images/inner/room2.jpeg",
    "/images/inner/room3.jpeg",
  ];

  // Booking states
  const [checkIn, setCheckIn] = useState(
    bookingsData?.selectedInDate ? new Date(bookingsData.selectedInDate) : new Date()
  );
  const [checkOut, setCheckOut] = useState(
    bookingsData?.selectedOutDate
      ? new Date(bookingsData.selectedOutDate)
      : new Date(new Date().setDate(new Date().getDate() + 3))
  );
  const [adult, setAdult] = useState(bookingsData?.adult || 2);
  const [children, setChildren] = useState(bookingsData?.children || 1);
  const [room, setRoom] = useState(bookingsData?.room || 1);

  const prevBtn = () => setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextBtn = () => setImageIndex((prev) => (prev + 1) % images.length);

  const setAlert = () => {
    Swal.fire({
                            html: `
    <p style="color:#d3ffd3; font-size:16px;">Do you want to proceed to booking details?</p>
  `,
      title: "Proceed to Booking",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#008000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      color: "#fff",
      iconColor: "#fff",
      background: "#006600",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/booking_details", {
          state: { checkIn, checkOut, adult, children, room, roomData: bookingsData },
        });
      }
    });
  };

  return (
    <section>
      <BreadCrumb title="room details" />

      <div className="py-20 2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container grid grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5">
          {/* Left Column: Images & Details */}
          <div className="col-span-6 md:col-span-4">
            {/* Image slider */}
            <div className="overflow-hidden relative group">
              <img
                src={images[imageIndex]}
                alt=""
                className="transition-all duration-500 delay-300 w-full h-[400px] object-cover "
              />
              <span
                className="w-[40px] h-[40px] bg-white dark:bg-lightBlack hover:bg-[#006600] dark:hover:bg-[#006600] grid items-center justify-center absolute bottom-[45%] left-[-50px] group-hover:left-4 transition-all duration-300 cursor-pointer"
                onClick={prevBtn}
              >
                <BsArrowLeft size={20} className="text-lightBlack dark:text-white hover:text-white" />
              </span>
              <span
                className="w-[40px] h-[40px] bg-white dark:bg-lightBlack hover:bg-[#006600] dark:hover:bg-[#006600] grid items-center justify-center absolute bottom-[45%] right-[-50px] group-hover:right-4 transition-all duration-300 cursor-pointer"
                onClick={nextBtn}
              >
                <BsArrowRight size={20} className="text-lightBlack dark:text-white hover:text-white" />
              </span>
            </div>

            {/* Room Title & Description */}
            <div className="pt-5 lg:pt-[35px] pr-3">
              <h2 className="py-2 font-Arial text-4xl text-lightBlack dark:text-white font-semibold">
                {bookingsData?.title || "Deluxe Double Room"}
              </h2>
              <p className="text-sm lg:text-base leading-6 text-[#808080] dark:text-lightGray font-normal font-Arial">
                Enjoy a relaxing stay in our Deluxe Double Room, featuring a scenic river view and a cozy, well-appointed space. Perfect for couples, small families, or friends, this room combines comfort, modern amenities, and a touch of elegance for an unforgettable stay.
              </p>

              {/* Room Features */}
              <div className="pt-10">
                <h2 className="pb-2 font-Arial text-3xl text-lightBlack dark:text-white font-semibold">
                  Room Features
                </h2>
                <ul className="space-y-2">
                  {["Air-conditioning", "Carpeted flooring", "Bedhead USB chargers", "Cable TV", "Free WiFi"].map((feature, i) => (
                    <li className="flex items-center" key={i}>
                      <BsCheck2 size={16} className="text-[#006600] mr-2" />
                      <span className="text-sm text-[#808080] dark:text-lightGray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bathroom Amenities */}
              <div className="pt-10">
                <h2 className="pb-2 font-Arial text-3xl text-lightBlack dark:text-white font-semibold">
                  Bathroom Amenities
                </h2>
                <ul className="space-y-2">
                  {["Heated WC seat", "Compartmentalised shower", "Cold & hot water rain shower", "Shampoo & body liquid soap"].map((item, i) => (
                    <li className="flex items-center" key={i}>
                      <BsCheck2 size={16} className="text-[#006600] mr-2" />
                      <span className="text-sm text-[#808080] dark:text-lightGray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Sidebar */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
{/* Booking Sidebar */}
{/* Booking Sidebar */}
<div className="bg-[#F5F5F5] dark:bg-normalBlack px-7 py-8">
  <h4 className="font-Arial text-2xl text-lightBlack dark:text-white font-semibold mb-4">
    Booking
  </h4>

  {/* Check-in & Check-out Date Pickers */}
  <div className="flex flex-col gap-4">
    {/* Check-in */}
    <div className="flex flex-col">
      <label className="text-gray-700 dark:text-lightGray w-24 mb-1">
        Check-in
      </label>
      <ReactDatePicker
        selected={checkIn}
        onChange={(date) => setCheckIn(date)}
        className="border border-gray-300 text-gray-800 bg-white -sm px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 w-full"
        placeholderText="Select date"
      />
    </div>

    {/* Check-out */}
    <div className="flex flex-col">
      <label className="text-gray-700 dark:text-lightGray w-24 mb-1">
        Check-out
      </label>
      <ReactDatePicker
        selected={checkOut}
        onChange={(date) => setCheckOut(date)}
        className="border border-gray-300 text-gray-800 bg-white -sm px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 w-full"
        placeholderText="Select date"
      />
    </div>
  </div>

  {/* Guests & Rooms */}
  <div className="mt-6 space-y-3">
    {[
      { label: "Adults", value: adult, set: setAdult, min: 1 },
      { label: "Children", value: children, set: setChildren, min: 0 },
      { label: "Rooms", value: room, set: setRoom, min: 1 },
    ].map(({ label, value, set, min }, i) => (
      <div className="flex justify-between items-center" key={i}>
        <span className="text-gray-700 dark:text-lightGray w-24">{label}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => set((v) => Math.max(min, v - 1))}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700  hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            -
          </button>
          <span className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-500 dark:border-gray-700  text-gray-800 dark:text-white min-w-[40px] text-center">
            {value}
          </span>
          <button
            onClick={() => set(value + 1)}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700  -sm hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            +
          </button>
        </div>
      </div>
    ))}
  </div>

{/* Total Amount Field */}
<div className="mt-8 flex items-center justify-between">
  <label className="text-base font-semibold text-gray-700 dark:text-lightGray mb-2">
    Total Amount
  </label>
  <span className="text-xl font-bold text-[#444] mb-2">
    Nu.{" "}
    {(() => {
      if (!checkIn || !checkOut) return "0.00";
      const nights = Math.max(
        1,
        Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))
      );
      const pricePerNight = 1200; // 💰 change as needed
      return (nights * room * pricePerNight).toFixed(2);
    })()}
  </span>
</div>

  {/* Confirm Booking Button */}
  <div className="mt-6">
    <button
      onClick={setAlert}
      className="bg-[#006600] w-full h-11 text-white font-Arial font-semibold -sm hover:bg-green-700 transition"
    >
      Proceed to Booking
    </button>
  </div>
</div>

            {/* Room Quick Info */}
            <div className="mt-5">
  <h4 className="font-Arial text-xl sm:text-[22px] md:text-2xl xl:text-3xl leading-7 md:leading-8 lg:leading-10 xl:leading-[50px] 2xl:leading-[60px] 3xl:leading-[70px] text-lightBlack dark:text-white font-semibold mb-2">
    Room Details
  </h4>

  <div className="grid items-center">
    <div className="flex items-center py-5 border-b-[1px] border-[#D3D3D3] dark:border-gray">
      <FaDollarSign className="text-[#006600] w-5 h-5 mr-3" />
      <span className="text-sm lg:text-[15px] leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
        Nu 7600 (USD 90++)
      </span>
    </div>

    <div className="flex items-center py-5 border-b-[1px] border-[#D3D3D3] dark:border-gray">
      <FaVectorSquare className="text-[#006600] w-5 h-5 mr-3" />
      <span className="text-sm lg:text-[15px] leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
        29 sqm
      </span>
    </div>

    <div className="flex items-center py-5 border-b-[1px] border-[#D3D3D3] dark:border-gray">
      <FaUserFriends className="text-[#006600] w-5 h-5 mr-3" />
      <span className="text-sm lg:text-[15px] leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
        3 max
      </span>
    </div>

    <div className="flex items-center py-5 border-b-[1px] border-[#D3D3D3] dark:border-gray">
      <FaBed className="text-[#006600] w-5 h-5 mr-3" />
      <span className="text-sm lg:text-[15px] leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
        2 x Super Single Bed(s)
      </span>
    </div>

    <div className="flex items-center py-5 border-b-[1px] border-[#D3D3D3] dark:border-gray">
      <FaWater className="text-[#006600] w-5 h-5 mr-3" />
      <span className="text-sm lg:text-[15px] leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
        Riverview
      </span>
    </div>
  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
