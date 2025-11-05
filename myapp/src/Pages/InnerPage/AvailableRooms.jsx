import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { BiChevronDown } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AvailableRooms = () => {
  const location = useLocation();
  const {
    checkIn: initialCheckIn,
    checkOut: initialCheckOut,
    room: initialRoom,
    adult: initialAdult,
    children: initialChildren,
  } = location.state || {};

  const [checkIn, setCheckIn] = useState(initialCheckIn || null);
  const [checkOut, setCheckOut] = useState(initialCheckOut || null);
  const [room, setRoom] = useState(initialRoom || 1);
  const [adult, setAdult] = useState(initialAdult || 1);
  const [children, setChildren] = useState(initialChildren || 0);
  const [open, setOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);

  const [useDesktopPicker] = useState(true);
  const [showInOverlay, setShowInOverlay] = useState(false);
  const [showOutOverlay, setShowOutOverlay] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const fmt = (date) =>
    date?.toLocaleDateString(undefined, {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

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

  // Sample rooms data
  const availableRooms = [
    {
      id: 1,
      name: "Junior Suite",
      type: "Luxury Room",
      priceUSD: 90,
      priceNu: 7600,
      size: "38 SQ.FT",
      beds: 2,
      image: "/images/home/room1.jpeg",
    },
    {
      id: 2,
      name: "Deluxe Double",
      type: "Deluxe Room",
      priceUSD: 95,
      priceNu: 8200,
      size: "28 SQ.FT",
      beds: 2,
      image: "/images/home/room2.jpeg",
    },
    
  ];

  return (
    <section className="font-inter">
      <BreadCrumb title="AVAILABLE ROOMS" home="/" />

      {/* ===== BOOKING SECTION ===== */}
      <div
        className="Container-Hero bg-lightBlack dark:bg-normalBlack grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center justify-center font-Arial py-3 lg:py-4 xl:py-5 2xl:py-6 border-t-[3px] border-t-khaki 
                   mx-auto shadow-xl relative z-20 -mt-20 px-4 sm:px-6 lg:px-10 z-[1]"
      >
        {/* Check In */}
        <div className="p-3">
          <p className="text-sm text-[#A9A9A9] ml-3">Check In</p>
          {useDesktopPicker ? (
            <button
              type="button"
              onClick={openInOverlay}
              className="w-full text-left text-white text-sm lg:text-base border border-white/20 px-3 py-2 mt-[2px]"
            >
              {checkIn ? fmt(checkIn) : "Select date"}
            </button>
          ) : (
            <input
              type="date"
              className="w-full border-none bg-transparent text-white text-sm lg:text-base"
              onChange={(e) =>
                setCheckIn(e.target.value ? new Date(e.target.value) : null)
              }
            />
          )}
        </div>

        {/* Check Out */}
        <div className="p-3">
          <p className="text-sm text-[#A9A9A9] ml-3">Check Out</p>
          {useDesktopPicker ? (
            <button
              type="button"
              onClick={openOutOverlay}
              className="w-full text-left text-white text-sm lg:text-base border border-white/20 px-3 py-2 mt-[2px]"
            >
              {checkOut ? fmt(checkOut) : "Select date"}
            </button>
          ) : (
            <input
              type="date"
              className="w-full border-none bg-transparent text-white text-sm lg:text-base"
              onChange={(e) =>
                setCheckOut(e.target.value ? new Date(e.target.value) : null)
              }
            />
          )}
        </div>

        {/* Rooms dropdown */}
        <div className="p-3">
          <div className="text-white px-3 py-2 w-full relative">
            <span
              className="flex items-center justify-between text-sm text-[#A9A9A9] cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              Rooms <BiChevronDown />
            </span>
            <div className="pt-[10px] text-sm sm:text-base">{room} Room</div>
            {open && (
              <div className="absolute shadow-2xl bg-white dark:bg-normalBlack dark:text-white w-60 py-2 text-sm mt-2">
                <li className="flex items-center justify-between px-5 py-2">
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
            )}
          </div>
        </div>

        {/* Guests dropdown */}
        <div className="p-3">
          <div className="text-white px-3 py-2 w-full relative">
            <span
              className="flex items-center justify-between text-sm text-[#A9A9A9] cursor-pointer"
              onClick={() => setGuestOpen(!guestOpen)}
            >
              Guests <BiChevronDown />
            </span>
            <div className="pt-[10px] text-sm sm:text-base">
              {adult} Adult, {children} Child
            </div>
            {guestOpen && (
              <div className="absolute shadow-2xl bg-white dark:bg-normalBlack dark:text-white w-60 py-2 text-sm mt-2">
                <li className="flex items-center justify-between px-5 py-2">
                  <div>{adult} Adult</div>
                  <div className="flex space-x-2">
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
                <li className="flex items-center justify-between px-5 py-2">
                  <div>{children} Child</div>
                  <div className="flex space-x-2">
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
            )}
          </div>
        </div>

        {/* Check Availability Button */}
        <Link to="/available_rooms" className="col-span-2 md:col-span-1">
          <button className="w-full h-10 lg:h-[50px] text-[15px] bg-khaki border border-khaki text-white relative z-10 hover:bg-opacity-90 transition-all duration-300">
            Check Availability
          </button>
        </Link>
      </div>

      {/* ===== AVAILABLE ROOMS ===== */}
      <div
        className="bg-cover bg-center bg-no-repeat py-20 2xl:py-[120px]"
        style={{ backgroundImage: "url('/images/home/background.png')" }}
      >
        <div className="Container">
          <div className="mt-7 grid items-center grid-cols-1 md:grid-cols-2 gap-8 md:gap-[40px]">
            {availableRooms.length === 0 ? (
              <div className="col-span-full text-center pt-10 pb-20 uppercase text-[#6B7280] text-lg sm:text-xl md:text-2xl lg:text-3xl">
                No Rooms Available
              </div>
            ) : (
              availableRooms.map((room) => (
                <div
                  key={room.id}
                  className="overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white border border-gray-200"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
                    />
                    <div className="px-5 py-2 inline-flex bg-khaki text-sm items-center justify-center text-white absolute top-[10px] right-[10px] z-10">
                      <span className="font-semibold">${room.priceUSD}</span>
                      <span className="mx-2">|</span>
                      <span>Nu {room.priceNu}</span>
                    </div>
                    <Link to={`/room_details`} state={{ price: room.priceUSD, title: room.name }}>
                      <button className="view-details-btn flex items-center justify-center text-[15px] leading-[38px] bg-black bg-opacity-90 hover:bg-opacity-100 absolute bottom-0 -left-40 px-6 py-1 text-white group-hover:left-0 transition-all duration-500 z-10">
                        View Details <BsArrowRight className="w-4 h-4 ml-2 text-white transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </Link>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
                  </div>

                  {/* Room Info */}
                  <div className="font-inter border-t border-gray-200">
                    <div className="py-6 px-5 sm:px-6 md:px-8 lg:px-[30px]">
                      <h4 className="text-sm leading-[26px] text-khaki uppercase font-semibold">
                        {room.type}
                      </h4>
                      <Link to={`/room_details/${room.id}`} state={{ price: room.priceUSD, title: room.name }}>
                        <h2 className="text-2xl lg:text-[24px] xl:text-[28px] leading-[26px] font-semibold text-black py-4 hover:text-khaki transition-colors duration-300">
                          {room.name}
                        </h2>
                      </Link>
                      <p className="text-sm font-normal text-gray-800">{room.size}</p>
                    </div>
                    <div className="border-t border-gray-200 py-5 px-5 sm:px-6 md:px-8 lg:px-[30px] flex items-center justify-between">
                      <span className="font-inter text-base flex items-center text-gray-800">
                        <FaBed className="text-gray-800 text-xl" />
                        <span className="ml-[10px] font-medium">
                          {room.beds} {room.beds > 1 ? "King Beds" : "King Bed"}
                        </span>
                      </span>
                      <span className="w-[1px] h-[25px] bg-gray-300"></span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailableRooms;
