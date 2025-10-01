const HotelAndFacilities = () => {
  return (
    <section className="bg-lightBlack z-[1] font-Inter">
      <div className="py-[110px] bg-no-repeat bg-top bg-opacity-[0.07]">
        <div className="Container">
          <div
            className="text-center mx-auto px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2 mb-4 lg:mb-5">
              <hr className="w-[100px] h-[1px] bg-[#3b3b3b] text-[#3b3b3b]" />
              <hr className="w-[100px] h-[1px] bg-[#3b3b3b] text-[#3b3b3b]" />
            </div>
            <h1 className="text-2xl md:text-3xl 2xl:text-[38px] leading-[38px] lg:leading-[44px] 2xl:leading-[52px] text-white mb-[6px] font-semibold uppercase">
              FACILITIES
            </h1>
            <p className="leading-[26px] text-lightGray font-normal text-sm sm:text-base">
              At Thim Dorji Resort, we provide a range of modern facilities 
              blended with Bhutanese hospitality to ensure your stay is both 
              comfortable and memorable.
            </p>
          </div>
          {/* HOTEL'S FACILITIES content */}
          <div
            className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-6 gap-4 xl:gap-[26px] pt-[60px] pb-[110px] px-8 lg:px-10 xl:px-28 2xl:px-0"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Facility 1 */}
            <div className="h-[200px] w-[191px] pt-[37px] pb-[27px] border border-[#343434] text-center transition-all duration-500 relative z-[1] overflow-hidden group hover:border-khaki">
              <div className="absolute inset-0 bg-[url('/images/home/serve.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-0 transform -translate-x-full group-hover:translate-x-0"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center transition-all duration-300">
                <div>
                  <img
                    src="/images/home/bed.png"
                    alt="Room Services"
                    className="mx-auto"
                  />
                </div>
                <div className="">
                  <h4 className="text-[22px] leading-[52px] text-white font-medium mt-[45px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:top-[-27px] before:bg-slate-500 before:group-hover:bg-khaki">
                    Room Services
                  </h4>
                </div>
              </div>
            </div>

            {/* Facility 2 */}
            <div className="h-[200px] w-[191px] pt-[37px] pb-[27px] border border-[#343434] text-center transition-all duration-500 relative z-[1] overflow-hidden group hover:border-khaki">
              <div className="absolute inset-0 bg-[url('/images/home/wifiwifi.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-0 transform -translate-x-full group-hover:translate-x-0"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center transition-all duration-300">
                <div>
                  <img
                    src="/images/home/wifi.png"
                    alt="Wi-Fi Internet"
                    className="mx-auto"
                  />
                </div>
                <div className="">
                  <h4 className="text-[22px] leading-[52px] text-white font-medium mt-[45px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:top-[-27px] before:bg-slate-500 before:group-hover:bg-khaki">
                    Wi-Fi Internet
                  </h4>
                </div>
              </div>
            </div>

            {/* Facility 3 */}
            <div className="h-[200px] w-[191px] pt-[37px] pb-[27px] border border-[#343434] text-center transition-all duration-500 relative z-[1] overflow-hidden group hover:border-khaki">
              <div className="absolute inset-0 bg-[url('/images/home/park.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-0 transform -translate-x-full group-hover:translate-x-0"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center transition-all duration-300">
                <div>
                  <img
                    src="/images/home/parking.png"
                    alt="Smart Key"
                    className="mx-auto"
                  />
                </div>
                <div className="">
                  <h4 className="text-[22px] leading-[52px] text-white font-medium mt-[45px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:top-[-27px] before:bg-slate-500 before:group-hover:bg-khaki">
                    Free Parking
                  </h4>
                </div>
              </div>
            </div>

            {/* Facility 4 */}
            <div className="h-[200px] w-[191px] pt-[37px] pb-[27px] border border-[#343434] text-center transition-all duration-500 relative z-[1] overflow-hidden group hover:border-khaki">
              <div className="absolute inset-0 bg-[url('/images/home/bf.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-0 transform -translate-x-full group-hover:translate-x-0"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center transition-all duration-300">
                <div>
                  <img
                    src="/images/home/dinner.png"
                    alt="Breakfast"
                    className="mx-auto"
                  />
                </div>
                <div className="">
                  <h4 className="text-[22px] leading-[52px] text-white font-medium mt-[45px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:top-[-27px] before:bg-slate-500 before:group-hover:bg-khaki">
                    Breakfast
                  </h4>
                </div>
              </div>
            </div>

            {/* Facility 5 */}
            <div className="h-[200px] w-[191px] pt-[37px] pb-[27px] border border-[#343434] text-center transition-all duration-500 relative z-[1] overflow-hidden group hover:border-khaki">
              <div className="absolute inset-0 bg-[url('/images/home/cam.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-0 transform -translate-x-full group-hover:translate-x-0"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center transition-all duration-300">
                <div>
                  <img
                    src="/images/home/camera.png"
                    alt="l"
                    className="mx-auto"
                  />
                </div>
                <div className="">
                  <h4 className="text-[22px] leading-[52px] text-white font-medium mt-[45px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:top-[-27px] before:bg-slate-500 before:group-hover:bg-khaki">
                     Under protection
                  </h4>
                </div>
              </div>
            </div>

            {/* Facility 6 */}
            <div className="h-[200px] w-[191px] pt-[37px] pb-[27px] border border-[#343434] text-center transition-all duration-500 relative z-[1] overflow-hidden group hover:border-khaki">
              <div className="absolute inset-0 bg-[url('/images/home/heat.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-0 transform -translate-x-full group-hover:translate-x-0"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center transition-all duration-300">
                <div>
                  <img
                    src="/images/home/energy.png"
                    alt="Room Service"
                    className="mx-auto"
                  />
                </div>
                <div className="">
                  <h4 className="text-[22px] leading-[52px] text-white font-medium mt-[45px] relative before:absolute before:w-[1px] before:h-[25px] before:left-[50%] before:top-[-27px] before:bg-slate-500 before:group-hover:bg-khaki">
                    Room Heating
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelAndFacilities;