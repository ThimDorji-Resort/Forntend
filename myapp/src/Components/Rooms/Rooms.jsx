import { Link } from "react-router-dom";
import "../../Components4/Testimonial/testimonials.css";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./RoomsDatepicker.css"; // custom calendar CSS
import { AiOutlineEye } from "react-icons/ai";
import FsLightbox from "fslightbox-react";

// Images (public folder URLs)
const room1 = "/images/home/room1.jpeg";
const room2 = "/images/home/room1.jpeg";
const room3 = "/images/home/room2.jpeg";
const room4 = "/images/home/room2.jpeg";

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
      <div className="relative z-[1]">
        <div
          className="Container-Hero bg-lightBlack dark:bg-normalBlack grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 items-center justify-center py-3 lg:py-4 xl:py-5 2xl:py-6 border-t-[3px] border-t-khaki mt-[-75px] left-0 right-0 z-[1]"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          {/* Check In */}
          <div className="p-3">
            <p className="text-sm text-lightGray ml-3">Check In</p>
            {!useDesktopPicker ? (
              <div className="flex items-center pt-[2px]">
                <input
                  type="date"
                  className="border-none bg-transparent focus:outline-transparent focus:border-transparent text-white outline-0 text-sm lg:text-base focus:ring-transparent"
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
            <p className="text-sm text-lightGray ml-3">Check Out</p>
            {!useDesktopPicker ? (
              <div className="flex items-center pt-[2px]">
                <input
                  type="date"
                  className="border-none bg-transparent focus:outline-transparent focus:border-transparent text-white outline-0 text-sm lg:text-base focus:ring-transparent"
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
                className="flex items-center justify-between text-sm text-lightGray cursor-pointer"
                onClick={() => setOpen(!open)}
                title="click here to open and close rooms extender"
              >
                Rooms
                <BiChevronDown />
              </span>
              <div className="pt-[10px] text-sm sm:text-base">{room} Room</div>
              <div className="absolute pt-5 z-20">
                <div
                  className={`shadow-2xl ${
                    open ? "" : "hidden"
                  } rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4`}
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
                className="flex items-center justify-between text-sm text-lightGray cursor-pointer"
                onClick={() => setGuestOpen(!guestOpen)}
                title="click here to open and close Adult And Children extender"
              >
                Guests
                <BiChevronDown />
              </span>
              <div className="pt-[10px] text-sm sm:text-base">
                {adult} Adult, {children} Child
              </div>
              <div className="absolute pt-5 z-20 ml-[-120px] sm:ml-0">
                <div
                  className={`shadow-2xl ${
                    guestOpen ? "" : "hidden"
                  } rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4`}
                >
                  <div className="py-2 px-5 group cursor-pointer">
                    <li className="flex items-center justify-between">
                      <div>{adult} Adult</div>
                      <div className="flex items-center space-x-2">
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

          {/* CTA */}
          <Link to="/find_room">
            <button className="w-[142px] h-10 lg:h-[50px] text-[15px] bg-khaki border border-khaki text-white mx-auto col-span-2 md:col-span-1 lg:col-span-1 relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-lightBlack before:transition-all before:duration-500 hover:before:w-full hover:before:left-0">
              Checkout Now
            </button>
          </Link>
        </div>
      </div>

      {/* ======= DESKTOP OVERLAY CALENDAR ======= */}
      {useDesktopPicker && (showInOverlay || showOutOverlay) && (
        <div
          className={`fixed inset-0 z-40 bg-black/20 flex items-center justify-center px-4 rdp-backdrop ${
            isClosing ? "is-closing" : ""
          }`}
          onClick={closeOverlay}
        >
          <div
            className={`bg-white text-black rounded-2xl shadow-2xl max-w-[560px] w-full overflow-hidden rdp-card ${
              isClosing ? "is-closing" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h3 className="text-lg font-semibold">
                {showInOverlay ? "Select Check-in" : "Select Check-out"}
              </h3>
              <button
                onClick={closeOverlay}
                className="px-3 py-1.5 border border-gray-300 hover:bg-gray-50 rounded-md text-sm"
              >
                Close
              </button>
            </div>

            {/* Calendar */}
            <div className="p-3 md:p-5">
              <ReactDatePicker
                inline
                monthsShown={1}
                calendarClassName="rdp-pill"
                renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                  <div className="rdp-pill__header">
                    <div className="rdp-pill__title">
                      {date.toLocaleDateString(undefined, {
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                    <div className="rdp-pill__controls">
                      <button
                        type="button"
                        className="rdp-pill__btn rdp-pill__btn--up"
                        onClick={increaseMonth}
                      >
                        ▲
                      </button>
                      <span className="rdp-pill__divider" />
                      <button
                        type="button"
                        className="rdp-pill__btn rdp-pill__btn--down"
                        onClick={decreaseMonth}
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                )}
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
              />
            </div>
          </div>
        </div>
      )}
      {/* ======= /DESKTOP OVERLAY CALENDAR ======= */}

      {/* ======= Two-panel background section ======= */}
      <section
        className="relative w-full min-h-[758px] overflow-hidden -mt-48 lg:-mt-36"
        aria-label="Rooms & Suites two-panel background"
      >
        <div className="absolute inset-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
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
              {/* hover slide-up block */}
              <div className="absolute left-0 right-0 bottom-0 m-6">
                <div className="text-center translate-y-[200px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span
                    className="w-[50px] h-[50px] cursor-pointer rounded-full bg-white dark:bg-lightBlack mb-6 grid place-items-center mx-auto"
                    onClick={() => setToggler(!toggler)}
                  >
                    <AiOutlineEye size={20} className="text-khaki" />
                  </span>
                  <div className="bg-white dark:bg-lightBlack text-center py-10">
                    <h4 className="text-lg md:text-xl lg:text-2xl leading-8 font-medium text-lightBlack dark:text-white">
                      Junior Suite
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-gray dark:text-lightGray font-normal hover:text-khaki">
                      <Link to="/home5/room">$90 | Nu 7600</Link>
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
                style={{ backgroundImage: `url(${room2})` }}
              />
              <div className="absolute left-0 right-0 bottom-0 m-6">
                <div className="text-center translate-y-[200px] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span
                    className="w-[50px] h-[50px] cursor-pointer rounded-full bg-white dark:bg-lightBlack mb-6 grid place-items-center mx-auto"
                    onClick={() => setToggler(!toggler)}
                  >
                    <AiOutlineEye size={20} className="text-khaki" />
                  </span>
                  <div className="bg-white dark:bg-lightBlack text-center py-10">
                    <h4 className="text-lg md:text-xl lg:text-2xl leading-8 font-medium text-lightBlack dark:text-white">
                      Deluxe Double
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-gray dark:text-lightGray font-normal hover:text-khaki">
                      <Link to="/home5/room">$95 | Nu 8200</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOREGROUND TITLE */}
        <div className="relative z-10 pointer-events-none">
          <div className="flex items-start justify-center pt-8 lg:pt-10 mt-32">
            <h1 className="pointer-events-auto text-white drop-shadow text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-9 lg:leading-[42px] 2xl:leading-[52px] font-semibold uppercase">
              Rooms & Suites
            </h1>
          </div>
        </div>

        {/* Lightbox */}
        <FsLightbox toggler={toggler} sources={lightboxSources} />
      </section>
    </div>
  );
};

export default Rooms;
