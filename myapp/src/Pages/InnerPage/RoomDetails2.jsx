import { BsArrowLeft, BsArrowRight, BsCheck2 } from "react-icons/bs";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaDollarSign, FaVectorSquare, FaUserFriends, FaBed, FaWater } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import "./RoomsDatepicker.css"; // same calendar styling as Rooms page

const RoomDetails2 = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showAvailability, setShowAvailability] = useState(false);

  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [room, setRoom] = useState(1);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [guestOpen, setGuestOpen] = useState(false);
  const [roomOpen, setRoomOpen] = useState(false);

  const [useDesktopPicker, setUseDesktopPicker] = useState(false);
  const [showInOverlay, setShowInOverlay] = useState(false);
  const [showOutOverlay, setShowOutOverlay] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const location = useLocation();
  const bookingsData = location.state && location.state;
  const navigate = useNavigate();

  const images = [
    "/images/inner/room1.jpeg",
    "/images/inner/room2.jpeg",
    "/images/inner/room3.jpeg",
  ];

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setUseDesktopPicker(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const fmt = (d) =>
    d
      ? d.toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })
      : "";

  const openInOverlay = () => {
    setShowOutOverlay(false);
    setIsClosing(false);
    setShowInOverlay(true);
  };

  const openOutOverlay = () => {
    setShowInOverlay(false);
    setIsClosing(false);
    setShowOutOverlay(true);
  };

  const closeOverlay = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowInOverlay(false);
      setShowOutOverlay(false);
      setIsClosing(false);
    }, 200);
  };

  const prevBtn = () =>
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextBtn = () => setImageIndex((prev) => (prev + 1) % images.length);

  // ======= ROOM AVAILABILITY ALERT =======
  const checkRoomAvailability = () => {
    // Replace this with real availability check
    const isAvailable = Math.random() > 0.5;

    if (isAvailable) {
      Swal.fire({
                                    html: `
    <p style="color:#d3ffd3; font-size:16px;">Do you want to proceed to booking details?</p>
  `,

        title: "Room is available!",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#008000",
        cancelButtonColor: "#d33",
        background: "#006600",
        color: "#fff",
        iconColor: "#fff",
      }).then((result) => {
      if (result.isConfirmed) {
        navigate("/booking_details", {
          state: { checkIn, checkOut, adult, children, room, roomData: bookingsData },
        });
      
        }
      });
    } else {
      Swal.fire({
                                                html: `
    <p style="color:#d3ffd3; font-size:16px;">Please select another date.</p>
  `,

        title: "Room Not Available",
        icon: "warning",
        confirmButtonText: "Ok",
        background: "#006600",
        color: "#fff",
        iconColor: "rgba(221, 193, 51, 1)",
        confirmButtonColor: "#008000",
      });
    }
  };

  return (
    <section className="">
      <BreadCrumb title="room details" />

      <div className="py-20 2xl:py-[120px] dark:bg-lightBlack">
        <div className="Container grid grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5">
          <div className="col-span-6 md:col-span-4">
            {/* Image Slider */}
            <div className="overflow-hidden relative group">
              <img
                src={images[imageIndex]}
                alt=""
                className="transition-all duration-500 delay-300 "
              />
              <div className="flex">
                <span
                  className="w-[40px] h-[40px] bg-white dark:bg-lightBlack hover:bg-[#006600] dark:hover:bg-[#006600] grid items-center justify-center absolute bottom-[45%] left-[-50px] group-hover:left-4 transition-all duration-300 cursor-pointer"
                  onClick={prevBtn}
                >
                  <BsArrowLeft
                    size={20}
                    className="text-lightBlack dark:text-white hover:text-white"
                  />
                </span>
                <span
                  className="w-[40px] h-[40px] bg-white dark:bg-lightBlack hover:bg-[#006600] dark:hover:bg-[#006600] grid items-center justify-center absolute bottom-[45%] right-[-50px] group-hover:right-4 transition-all duration-300 cursor-pointer"
                  onClick={nextBtn}
                >
                  <BsArrowRight
                    size={20}
                    className="text-lightBlack dark:text-white hover:text-white"
                  />
                </span>
              </div>
            </div>

            {/* Room Content */}
            <div className="pt-5 lg:pt-[35px] pr-3">
              <h2 className="py-2 font-Arial text-2xl lg:text-4xl font-semibold text-lightBlack dark:text-white">
                {bookingsData?.title || "Deluxe Double Room"}
              </h2>
              <p className="text-sm lg:text-base leading-6 text-[#808080] dark:text-lightGray font-normal">
Enjoy a relaxing stay in our Deluxe Double Room, featuring a scenic river view and a cozy, well-appointed space. Perfect for couples, small families, or friends, this room combines comfort, modern amenities, and a touch of elegance for an unforgettable stay.
              </p>
              <div
                className="pt-10 2xl:pt-[60px]"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <h2
                  className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Arial text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
                >
                  Room Features
                </h2>
                <ul className="space-y-2 lg:space-y-3 ">
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
                      Individually controlled air-conditioning
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
                      Carpeted flooring
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
                      Bedhead USB chargers
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
                      Cable TV
                    </span>
                  </li>
                                    <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
Free WiFi                    </span>
                  </li>
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
                      Coffee/Tea facilities with kettle jug
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
                      Bottled mineral water
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
                      Universal power plugs
                    </span>
                  </li>
                                    <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
                      Extra bed setup
                    </span>
                  </li>
                </ul>
              </div>
                            {/* Bathroom Amenities */}
              <div
                className="pt-10 2xl:pt-[60px]"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <h2
                  className="pb-2 sm:pb-3 md:pb-4 lg:pb-[19px] 2xl:pb-6
                font-Arial text-[22px] sm:text-2xl md:text-3xl 2xl:text-[32px] leading-7 lg:leading-[26px] text-lightBlack dark:text-white font-semibold"
                >
                  Bathroom Amenities
                </h2>
                <ul className="space-y-2 lg:space-y-3 ">
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
                      Heated WC seat
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
                      Compartmentalised shower
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
                      Cold & hot water rain shower
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
                      Shampoo & body liquid soap
                    </span>
                  </li>
                                    <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
Hairdryer                    </span>
                  </li>
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
                      Bathroom heater
                    </span>
                  </li>
                  <li className="flex items-center">
                    <BsCheck2 size={16} className="text-[#006600] mr-2" />
                    <span className="text-sm lg:text-base leading-[26px] text-[#808080] dark:text-lightGray font-normal font-Arial">
                      Complimentary bathrobe, towels, and toiletries
                    </span>
                  </li>
                </ul>
              </div>
              <br />

              </div>
              </div>


          {/* Sidebar */}
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            
            {/* booking details sidebar */}
            <div>
              <div className="  px-7 py-8 md:px-8 md:py-10 lg:px-0 lg:py-0 2xl:px-10 2xl:pt-[45px] 2xl:pb-[30px] grid-flow-row-dense">
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
              {/* Check Availability Button */}
              <div className="py-5">
                <button
                  className="bg-[#006600] w-full h-10 2xl:h-[50px] text-white font-Arial font-semibold px-5 hover:animBg"
                  onClick={() => setShowAvailability(true)}
                >
                  Book This Room
                </button>
              </div>
            </div>

            {/* Sliding Availability Panel */}
            {showAvailability && (
              <div>
                <div
                  className="fixed inset-0 bg-black/30 z-40 transition-opacity"
                  onClick={() => setShowAvailability(false)}
                ></div>

                <div
                  className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-black dark:bg-lightBlack shadow-2xl z-50 transform transition-transform duration-500 ${
                    showAvailability ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <div className="p-6 flex flex-col h-full relative">
                    {/* Close Button */}
                    <button
                      onClick={() => setShowAvailability(false)}
                      className="absolute top-4 right-4 text-white dark:text-lightGray text-4xl font-light"
                    >
                      ×
                    </button>
<br />
<br />


{/* Check-in & Check-out Buttons */}
<div className="mb-4 grid gap-4">
  <div>
    <label className="block mb-1 text-bg text-white dark:text-lightGray">
      Check-in
    </label>
    {!useDesktopPicker ? (
      <input
        type="date"
        value={checkIn ? checkIn.toISOString().split("T")[0] : ""}
        onChange={(e) =>
          setCheckIn(e.target.value ? new Date(e.target.value) : null)
        }
        className="w-full border border-white px-3 py-2  text-white bg-black hover:bg-green-700 appearance-none placeholder-green-200 "
      />
    ) : (
      <button
        className="w-full text-left border border-gray-200 px-3 py-2  text-white bg-black hover:bg-green-700"
        onClick={openInOverlay}
      >
        {checkIn ? fmt(checkIn) : "Select date"}
      </button>
    )}
  </div>
                      <div>
                        <label className="block mb-1 text-bg text-white dark:text-lightGray">
                          Check-out
                        </label>
                        {!useDesktopPicker ? (
                          <input
                            type="date"
                            value={checkOut ? checkOut.toISOString().split("T")[0] : ""}
                            onChange={(e) =>
                              setCheckOut(e.target.value ? new Date(e.target.value) : null)
                            }
                            className="w-full border border-white px-3 py-2  text-white bg-black hover:bg-green-700 appearance-none placeholder-green-200 "
                          />
                        ) : (
                          <button
                            className="w-full text-left border border-white px-3 py-2  text-white bg-black hover:bg-green-700"
                            onClick={openOutOverlay}
                          >
                            {checkOut ? fmt(checkOut) : "Select date"}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Guests */}
                    <div className="mb-4 relative">
                      <label className="block mb-1 text-bg text-white dark:text-lightGray">
                        Guests
                      </label>
                      <div
                        className="w-full border border-white px-3 py-2  cursor-pointer text-white dark:text-white dark:bg-normalBlack flex justify-between items-center"
                        onClick={() => setGuestOpen(!guestOpen)}
                      >
                        <span>
                          {adult} Adult, {children} Child
                        </span>
                        <BiChevronDown
                          className={`transition-transform ${guestOpen ? "rotate-180" : ""}`}
                        />
                      </div>
                      {guestOpen && (
                        <div className="absolute top-15 left-0 bg-white dark:bg-lightBlack border  w-full p-3 space-y-2 shadow-lg z-50 animate-slide-down">
                          <div className="flex justify-between items-center">
                            <span>Adults</span>
                            <div className="flex gap-2">
                              <button
                                onClick={() => setAdult((v) => Math.max(1, v - 1))}
                                className="px-2 py-1 bg-gray-200 dark:bg-gray-700  -mt-1"
                              >
                                -
                              </button>
                              <span>{adult}</span>
                              <button
                                onClick={() => setAdult(adult + 1)}
                                className="px-2 py-1 bg-gray-200 dark:bg-gray-700  -mt-1"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Children</span>
                            <div className="flex gap-2">
                              <button
                                onClick={() => setChildren((v) => Math.max(0, v - 1))}
                                className="px-2 py-1 bg-gray-200 dark:bg-gray-700  -mt-1"
                              >
                                -
                              </button>
                              <span>{children}</span>
                              <button
                                onClick={() => setChildren(children + 1)}
                                className="px-2 py-1 bg-gray-200 dark:bg-gray-700  -mt-1"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Rooms */}
                    <div className="mb-4 relative">
                      <label className="block mb-1 text-bg text-white dark:text-lightGray">
                        Rooms
                      </label>
                      <div
                        className="w-full border border-white px-3 py-2  cursor-pointer text-white dark:text-white dark:bg-normalBlack flex justify-between items-center"
                        onClick={() => setRoomOpen(!roomOpen)}
                      >
                        <span>{room} Room{room > 1 ? "s" : ""}</span>
                        <BiChevronDown
                          className={`transition-transform ${roomOpen ? "rotate-180" : ""}`}
                        />
                      </div>
                      {roomOpen && (
                        <div className="absolute top-15 left-0 bg-white dark:bg-lightBlack border  w-full p-3 space-y-2 shadow-lg z-50 animate-slide-down">
                          <div className="flex justify-between items-center">
                            <span>Rooms</span>
                            <div className="flex gap-2">
                              <button
                                onClick={() => setRoom((v) => Math.max(1, v - 1))}
                                className="px-2 py-1 bg-gray-200 dark:bg-gray-700  -mt-1"
                              >
                                -
                              </button>
                              <span>{room}</span>
                              <button
                                onClick={() => setRoom(room + 1)}
                                className="px-2 py-1 bg-gray-200 dark:bg-gray-700  -mt-1"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Confirm Button */}
                    <button
                      onClick={checkRoomAvailability}
                      className="mt-auto bg-[#006600] text-white font-semibold py-3  hover:bg-[#004d00] transition"
                    >
                      Check Availability
                    </button>
                  </div>
                </div>
              </div>
            )}

        {/* ===== DESKTOP OVERLAY CALENDAR ===== */}
        {useDesktopPicker && (showInOverlay || showOutOverlay) && (
          <div
            className={`fixed inset-0 z-[9999] bg-black/20 flex items-center justify-center px-4`}
            onClick={closeOverlay}
          >
            <div
              className="bg-white text-black shadow-2xl max-w-[560px] w-full overflow-visible"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold">
                  {showInOverlay ? "Select Check-in" : "Select Check-out"}
                </h3>
                <button
                  onClick={closeOverlay}
                  className="px-3 py-1.5 border border-[#D1D5DB] hover:bg-gray-50  text-sm"
                >
                  Close
                </button>
              </div>
              <div className="p-3 md:p-5">
<ReactDatePicker
  inline
  monthsShown={1}
  calendarClassName="rdp-pill"
  selected={showInOverlay ? checkIn : checkOut}
  minDate={showInOverlay ? new Date() : checkIn || new Date()}
  onChange={(date) => {
    if (showInOverlay) {
      setCheckIn(date);
      if (checkOut && date && checkOut < date) setCheckOut(null);
      closeOverlay();
    } else {
      setCheckOut(date);
      closeOverlay();
    }
  }}
  showDisabledMonthNavigation
renderCustomHeader={({
  date,
  changeMonth,
  changeYear,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => (
  <div className="flex items-center justify-between px-3 py-2">
    {/* Left side: Month & Year */}
    <div className="flex items-center space-x-2">
      {/* Month Dropdown */}
      <select
        value={date.getMonth()}
        onChange={({ target: { value } }) => changeMonth(Number(value))}
        className="border px-2 py-1 text-sm border-[#9CA3AF]"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <option key={i} value={i}>
            {new Date(0, i).toLocaleString("default", { month: "long" })}
          </option>
        ))}
      </select>

      {/* Year Dropdown */}
      <select
        value={date.getFullYear()}
        onChange={({ target: { value } }) => changeYear(Number(value))}
        className="border px-2 py-1 text-sm border-[#9CA3AF]"
      >
        {Array.from({ length: 11 }, (_, i) => {
          const year = new Date().getFullYear() + i; // current year to 10 years ahead
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
      </select>
    </div>

    {/* Right side: Month arrows in a row */}
    <div className="flex items-center space-x-2">
      <button
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        className="px-2 py-1 border border-[#9CA3AF] text-[#1F1F1F]"
        title="Previous Month"
      >
        ▲
      </button>
      <button
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        className="px-2 py-1 border border-[#9CA3AF] text-[#1F1F1F]"
        title="Next Month"
      >
        ▼
      </button>
    </div>
  </div>
)}
/>

              </div>
            </div>
          </div>
        )}
        {/* ===== /DESKTOP OVERLAY CALENDAR ===== */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails2;
