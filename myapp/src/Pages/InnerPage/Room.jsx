
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Room = () => {
  return (
    <section className="font-inter">
      <BreadCrumb title="ROOMS & SUITS" home={"/"} />

      {/* All rooms */}
      <div
        className="bg-cover bg-center bg-no-repeat py-20 2xl:py-[120px]"
        style={{ backgroundImage: "url('/images/home/background.png')" }}
      >
        <div className="Container">
          {/* section heading */}
          <div
            className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] mx-auto px-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section Logo */}
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-[100px] h-[1px] bg-gray-800 text-gray-800" />
              <hr className="w-[100px] h-[1px] bg-gray-800 text-gray-800" />
            </div>
            <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-9 lg:leading-[42px] 2xl:leading-[52px] text-black mt-[30px] mb-[24px] font-inter font-semibold uppercase">
              Rooms & Suites
            </h1>
          </div>

          {/* Rooms Container */}
          <div className="mt-7 2xl:mt-[60px] grid items-center grid-cols-1 md:grid-cols-2 gap-8 md:gap-[40px]">
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

                {/* Overlay effect */}
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
                      <div className="">
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
                      </div>
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
                <Link to={"/room_details2"}>
                  <button className="flex items-center justify-center text-[15px] leading-[38px] bg-black bg-opacity-90 hover:bg-opacity-100 absolute bottom-0 -left-40 px-6 py-1 text-white group-hover:left-0 transition-all duration-500 z-10">
                    View Details{" "}
                    <BsArrowRight className="w-4 h-4 ml-2 text-white transition-transform duration-300 group-hover:translate-x-1" />{" "}
                  </button>
                </Link>

                {/* Overlay effect */}
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
                      <div className="">
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
                      </div>
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

export default Room;
