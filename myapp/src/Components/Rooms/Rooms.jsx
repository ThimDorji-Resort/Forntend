import { Link } from "react-router-dom";
import "../../Components/Testimonial/testimonials.css";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./RoomsDatepicker.css"; // custom calendar CSS
import { AiOutlineEye } from "react-icons/ai";
import FsLightbox from "fslightbox-react";

// Import images
import room1 from "/images/home/room1.jpeg";
import room2 from "/images/home/room1.jpeg";
import room3 from "/images/home/room2.jpeg";
import room4 from "/images/home/room2.jpeg";

const Rooms = () => {
  const [open, setOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);
  const [room, setRoom] = useState(1);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);

  // Desktop calendar overlay states
  const [useDesktopPicker, setUseDesktopPicker] = useState(false);
  const [showInOverlay, setShowInOverlay] = useState(false);
  const [showOutOverlay, setShowOutOverlay] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  // Lightbox
  const [toggler, setToggler] = useState(false);
  const lightboxSources = [room1, room2, room3, room4];

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

  return (
    <div className="bg-whiteSmoke dark:bg-white font-Inter">
      <div className="relative">
        {/* ===== BOOKING SECTION ===== */}
        <div
          className="Container-Hero bg-lightBlack dark:bg-normalBlack grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center justify-center font-Arial py-3 lg:py-4 xl:py-5 2xl:py-6 border-t-[3px] border-t-khaki 
                     mx-auto  shadow-xl relative z-20 -mt-20 px-4 sm:px-6 lg:px-10 z-[1]"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          {/* Check In */}
          <div className="p-3">
            <p className="text-sm text-[#A9A9A9] ml-3">Check In</p>
            {!useDesktopPicker ? (
              <div className="flex items-center pt-[2px]">
                <input
                  type="date"
                  className="border-none bg-transparent focus:outline-transparent text-white outline-0 text-sm lg:text-base focus:ring-transparent"
                  required
                  onChange={(e) =>
                    setCheckIn(e.target.value ? new Date(e.target.value) : null)
                  }
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={openInOverlay}
                className="w-full text-left text-white text-sm lg:text-base border border-white/20 px-3 py-2 mt-[2px]"
                title="Open calendar"
              >
                {checkIn ? fmt(checkIn) : "Select date"}
              </button>
            )}
          </div>

          {/* Check Out */}
          <div className="p-3">
            <p className="text-sm text-[#A9A9A9] ml-3">Check Out</p>
            {!useDesktopPicker ? (
              <div className="flex items-center">
                <input
                  type="date"
                  className="border-none bg-transparent focus:outline-transparent text-white outline-0 text-sm lg:text-base focus:ring-transparent"
                  required
                  onChange={(e) =>
                    setCheckOut(
                      e.target.value ? new Date(e.target.value) : null
                    )
                  }
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={openOutOverlay}
                className="w-full text-left text-white text-sm lg:text-base border border-white/20 px-3 py-2 mt-[2px]"
                title="Open calendar"
              >
                {checkOut ? fmt(checkOut) : "Select date"}
              </button>
            )}
          </div>

          {/* Rooms dropdown */}
          <div className="p-3">
            <div className="text-white px-3 py-2 w-full transition-all duration-300 group relative">
              <span
                className="flex items-center justify-between text-sm text-[#A9A9A9] cursor-pointer"
                onClick={() => setOpen(!open)}
                title="click here to open and close rooms extender"
              >
                Rooms
                <BiChevronDown />
              </span>
              <div className="pt-[10px] text-sm sm:text-base">{room} Room</div>
              <div className="absolute pt-3 z-20">
                <div
                  className={`shadow-2xl ${
                    open ? "" : "hidden"
                  } bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-2`}
                >
                  <div className="py-2 px-5 group cursor-pointer">
                    <li className="flex items-center justify-between">
                      <div>{room} Room</div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                          onClick={() => setRoom(room + 1)}
                        >
                          +
                        </button>
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                          onClick={() => setRoom((v) => Math.max(1, v - 1))}
                        >
                          -
                        </button>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guests dropdown */}
          <div className="p-3">
            <div className="text-white px-3 py-2 w-full transition-all duration-300 group relative">
              <span
                className="flex items-center justify-between text-sm text-[#A9A9A9] cursor-pointer"
                onClick={() => setGuestOpen(!guestOpen)}
                title="click here to open and close Adult And Children extender"
              >
                Guests
                <BiChevronDown />
              </span>
              <div className="pt-[10px] text-sm sm:text-base">
                {adult} Adult, {children} Child
              </div>
              <div className="absolute pt-3 z-20 ml-[-120px] sm:ml-0">
                <div
                  className={`shadow-2xl ${
                    guestOpen ? "" : "hidden"
                  } bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-2`}
                >
                  <div className="py-2 px-5 group cursor-pointer">
                    <li className="flex items-center justify-between mb-2">
                      <div>{adult} Adult</div>
                      <div className="flex items-center space-x-2 ">
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                          onClick={() => setAdult(adult + 1)}
                        >
                          +
                        </button>
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                          onClick={() => setAdult((v) => Math.max(1, v - 1))}
                        >
                          -
                        </button>
                      </div>
                    </li>
                    <li className="flex items-center justify-between mt-1">
                      <div>{children} Child</div>
                      <div className="flex items-center space-x-2">
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                          onClick={() => setChildren(children + 1)}
                        >
                          +
                        </button>
                        <button
                          className="w-5 h-5 md:w-6 md:h-6 bg-khaki text-white"
                          onClick={() => setChildren((v) => Math.max(0, v - 1))}
                        >
                          -
                        </button>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout CTA */}
<Link
  to="/available_rooms"
  state={{ checkIn, checkOut, room, adult, children }}
  className="col-span-2 md:col-span-1"
>
            <button className="w-full h-10 lg:h-[50px] text-[15px] bg-khaki border border-khaki text-white relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-lightBlack before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
              Check Availability
            </button>
          </Link>
        </div>

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

        {/* ===== ROOMS SECTION ===== */}
        <section
          className="relative w-full overflow-hidden mt-[-163px] md:mt-[-135px] lg:mt-[-143px] xl:mt-[-57px] h-[880px] lg:h-[700px]"
          aria-label="Rooms & Suites two-panel background"
          style={{ zIndex: 0 }}
        >
          <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* LEFT PANEL */}
            <div
              className="relative group overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className="absolute inset-0 bg-center bg-cover transition-all duration-300 group-hover:grayscale"
                style={{ backgroundImage: `url(${room1})` }}
              />
              <div className="absolute left-0 right-0 bottom-0 m-6">
                <div className="text-center translate-y-[200px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Link
                    to="/room_details2"
                    className="w-[50px] h-[50px] cursor-pointer rounded-full bg-white dark:bg-lightBlack mb-6 grid place-items-center mx-auto hover:scale-105 transition-transform duration-200"
                  >
                    <AiOutlineEye size={20} className="text-[#006600]" />
                  </Link>

                  <div className="bg-white dark:bg-lightBlack text-center py-10">
                    <h4 className="text-lg md:text-xl lg:text-2xl leading-8 font-medium text-lightBlack dark:text-white">
                      Junior Suite
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-gray dark:text-lightGray font-normal">
                      $90 | Nu 7600
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div
              className="relative group overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className="absolute inset-0 bg-center bg-cover transition-all duration-300 group-hover:grayscale"
                style={{ backgroundImage: "url('/images/home/room2.jpeg')" }}
              />
              <div className="absolute left-0 right-0 bottom-0 m-6">
                <div className="text-center translate-y-[200px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Link
                    to="/room_details2"
                    className="w-[50px] h-[50px] cursor-pointer rounded-full bg-white dark:bg-lightBlack mb-6 grid place-items-center mx-auto hover:scale-105 transition-transform duration-200"
                  >
                    <AiOutlineEye size={20} className="text-[#006600]" />
                  </Link>

                  <div className="bg-white dark:bg-lightBlack text-center py-10">
                    <h4 className="text-lg md:text-xl lg:text-2xl leading-8 font-medium text-lightBlack dark:text-white">
                      Deluxe Double
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-gray dark:text-lightGray font-normal">
                      $95 | Nu 8200
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lightbox */}
          <FsLightbox toggler={toggler} sources={lightboxSources} />
        </section>
        {/* ===== /ROMS SECTION ===== */}
      </div>
    </div>
  );
};

export default Rooms;
