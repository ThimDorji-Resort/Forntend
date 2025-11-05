import { useState } from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Checkout = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [room, setRoom] = useState(1);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [open, setOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);

  const [useDesktopPicker] = useState(true);
  const [showInOverlay, setShowInOverlay] = useState(false);
  const [showOutOverlay, setShowOutOverlay] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openInOverlay = () => {
    setShowInOverlay(true);
    setShowOutOverlay(false);
  };

  const openOutOverlay = () => {
    setShowOutOverlay(true);
    setShowInOverlay(false);
  };

  const closeOverlay = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setShowInOverlay(false);
      setShowOutOverlay(false);
    }, 300);
  };

  const fmt = (date) =>
    date?.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  return (
    <section className="font-inter">
      <BreadCrumb title="ROOMS & SUITES" home={"/"} />

      {/* ===== Booking Filter Section ===== */}
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
                    className="border-none bg-transparent focus:outline-transparent text-white text-sm lg:text-base"
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
                    className="border-none bg-transparent focus:outline-transparent text-white text-sm lg:text-base"
                    required
                    onChange={(e) =>
                      setCheckOut(e.target.value ? new Date(e.target.value) : null)
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

            {/* Rooms Dropdown */}
            <div className="p-3">
              <div className="text-white px-3 py-2 w-full relative">
                <span
                  className="flex items-center justify-between text-sm text-lightGray cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  Rooms <BiChevronDown />
                </span>
                <div className="pt-[10px] text-sm sm:text-base">{room} Room</div>
                {open && (
                  <div className="absolute shadow-2xl rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 mt-2 z-20">
                    <div className="py-2 px-5">
                      <li className="flex items-center justify-between">
                        <div>{room} Room</div>
                        <div className="flex items-center space-x-2">
                          <button
                            className="w-5 h-5 bg-khaki text-white"
                            onClick={() => setRoom(room + 1)}
                          >
                            +
                          </button>
                          <button
                            className="w-5 h-5 bg-khaki text-white"
                            onClick={() => setRoom((v) => Math.max(1, v - 1))}
                          >
                            -
                          </button>
                        </div>
                      </li>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Guests Dropdown */}
            <div className="p-3">
              <div className="text-white px-3 py-2 w-full relative">
                <span
                  className="flex items-center justify-between text-sm text-lightGray cursor-pointer"
                  onClick={() => setGuestOpen(!guestOpen)}
                >
                  Guests <BiChevronDown />
                </span>
                <div className="pt-[10px] text-sm sm:text-base">
                  {adult} Adult, {children} Child
                </div>
                {guestOpen && (
                  <div className="absolute shadow-2xl rounded-sm bg-white text-black w-60 text-left dark:bg-normalBlack dark:text-white transition-all duration-500 text-sm py-4 mt-2 z-20">
                    <div className="py-2 px-5">
                      <li className="flex items-center justify-between">
                        <div>{adult} Adult</div>
                        <div className="flex items-center space-x-2">
                          <button
                            className="w-5 h-5 bg-khaki text-white"
                            onClick={() => setAdult(adult + 1)}
                          >
                            +
                          </button>
                          <button
                            className="w-5 h-5 bg-khaki text-white"
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
                            className="w-5 h-5 bg-khaki text-white"
                            onClick={() => setChildren(children + 1)}
                          >
                            +
                          </button>
                          <button
                            className="w-5 h-5 bg-khaki text-white"
                            onClick={() => setChildren((v) => Math.max(0, v - 1))}
                          >
                            -
                          </button>
                        </div>
                      </li>
                    </div>
                  </div>
                )}
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
      </div>

      {/* ======= Desktop Overlay Calendar ======= */}
      {useDesktopPicker && (showInOverlay || showOutOverlay) && (
        <div
          className={`fixed inset-0 z-40 bg-black/20 flex items-center justify-center px-4 ${
            isClosing ? "is-closing" : ""
          }`}
          onClick={closeOverlay}
        >
          <div
            className={`bg-white text-black rounded-2xl shadow-2xl max-w-[560px] w-full overflow-hidden ${
              isClosing ? "is-closing" : ""
            }`}
            onClick={(e) => e.stopPropagation()}
          >
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

            <div className="p-3 md:p-5">
              <ReactDatePicker
                inline
                monthsShown={1}
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

      {/* ===== Rooms Section ===== */}
      <div
        className="bg-cover bg-center bg-no-repeat py-20 2xl:py-[120px]"
        style={{ backgroundImage: "url('/images/home/background.png')" }}
      >
        <div className="Container">
          <div className="mt-7 grid items-center grid-cols-1 md:grid-cols-2 gap-8 md:gap-[40px]">

            {/* Room - 1 */}
            <div
              className="overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white border border-gray-10"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src="/images/home/room1.jpeg"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
                    alt="Delux Family Rooms"
                  />
                </div>
                <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm items-center justify-center text-white absolute top-[10px] right-[10px] z-10">
                  <span className="font-semibold">$90 </span>
                  <span className="mx-2">|</span>
                  <span>Nu 7600</span>
                </div>

                <Link to={"/room_details"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-black bg-opacity-90 hover:bg-opacity-100 absolute bottom-0 -left-40 px-6 py-1 text-white group-hover:left-0 transition-all duration-500 z-10">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2 text-white transition-transform duration-300 group-hover:translate-x-1" />{" "}
                  </button>
                </Link>

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
              </div>
              <div className="font-inter">
                <div className="border-t border-gray-200">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      LUXURY ROOM
                    </h4>
                    <Link
                      to="/find_room"
                      state={{ price: "450", title: "Delux Family Rooms" }}
                    >
                      <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-black py-4 hover:text-khaki transition-colors duration-300">
                        Junior Suite{""}
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray-800 font-inter">
                      38 SQ.FT/Rooms
                    </p>
                  </div>
                  <div className="border-t border-gray-200 py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <span className="font-inter text-base flex items-center text-gray-800">
                        <img
                          src="/images/home-1/room-bottom-icon.png"
                          alt="Bed Icon"
                          className="filter brightness-0"
                        />
                        <span className="ml-[10px] font-medium">
                          2 King Bed
                        </span>
                      </span>
                      <span className="w-[1px] h-[25px] bg-gray-300"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Room - 2 */}
            <div
              className="overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white border border-gray-200"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="relative overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src="/images/home/room2.jpeg"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
                    alt="Double Suite Rooms"
                  />
                </div>
                <div className="px-5 3xl:px-6 py-2 inline-flex bg-khaki text-sm items-center justify-center text-white absolute top-[10px] right-[10px] z-10">
                  <span className="font-semibold">$95</span>
                  <span className="mx-2">|</span>
                  <span>Nu 8200</span>
                </div>
                <Link to={"/room_details"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-black bg-opacity-90 hover:bg-opacity-100 absolute bottom-0 -left-40 px-6 py-1 text-white group-hover:left-0 transition-all duration-500 z-10">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2 text-white transition-transform duration-300 group-hover:translate-x-1" />{" "}
                  </button>
                </Link>

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
              </div>
              <div className="font-inter">
                <div className="border-t border-gray-200">
                  <div className="py-6 px-[30px]">
                    <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                      LUXURY ROOM
                    </h4>
                    <Link
                      to="/find_room"
                      state={{ price: "550", title: "Double Suite Rooms" }}
                    >
                      <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-black py-4 hover:text-khaki transition-colors duration-300">
                        Deluxe Double
                      </h2>
                    </Link>
                    <p className="text-sm font-normal text-gray-800 font-inter">
                      28 SQ.FT/Rooms
                    </p>
                  </div>
                  <div className="border-t border-gray-200 py-5">
                    <div className="px-[30px] flex items-center justify-between">
                      <span className="font-inter text-base flex items-center text-gray-800">
                        <img
                          src="/images/home-1/room-bottom-icon.png"
                          alt="Bed Icon"
                          className="filter brightness-0"
                        />
                        <span className="ml-[10px] font-medium">
                          2 King Bed
                        </span>
                      </span>
                      <span className="w-[1px] h-[25px] bg-gray-300"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
