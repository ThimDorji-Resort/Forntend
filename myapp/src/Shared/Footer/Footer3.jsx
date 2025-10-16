import { BiSolidPhoneCall } from "react-icons/bi";
import {
  FaEnvelope,
  FaFacebookF,
  FaWhatsapp,
  FaFileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer3 = () => {
  return (
    <footer className="bg-lightBlack">
      <div className="Container">
        <div className="grid items-center justify-center py-20 2xl:py-[110px]">
          <div className="flex justify-center items-center">
            <div className="bg-white p-4 ">
              {/* ✅ Use public URL directly */}
              <img src="/images/home/logologo.png" className="w-32" alt="logo" />
            </div>
          </div>

          {/* footer contact */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-x-[30px] 2xl:gap-x-[40px] gap-y-4">
            <div
              className="flex items-center group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] lg:w-[50px] lg:h-[50px] grid items-center justify-center">
                <BiSolidPhoneCall className="text-white" size={15} />
              </span>
              <p className="text-sm sm:text-base leading-[26px] lg:leading-[38px] font-Arial font-small ml-2 text-white group-hover:text-[#006600] transition-all duration-300">
                +975 17755898 | +65 8111 9926
              </p>
            </div>
            <div
              className="flex items-center group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="grid items-center justify-center w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] lg:w-[50px] lg:h-[50px]">
                <FaEnvelope className="text-white" size={15} />
              </span>
              <p className="text-sm sm:text-base leading-[26px] lg:leading-[38px] font-Arial font-small ml-2 text-white group-hover:text-[#006600] transition-all duration-300">
                resortthimdorjireservation@gmail.com
              </p>
            </div>
            <div
              className="flex items-center group"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span className="grid items-center justify-center w-[35px] h-[35px] md:w-[40px] md:h-[40px] xl:w-[50px] xl:h-[50px] lg:w-[50px] lg:h-[50px]">
                <FaFileAlt className="text-white" size={15} />
              </span>
              <Link
                to="/terms_and_conditions"
                className="text-sm sm:text-base leading-[26px] lg:leading-[38px] font-Arial font-small ml-2 text-white group-hover:text-[#006600] transition-all duration-300"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <hr className="text-[#353535] w-full h-[2px]" />
        <div className="py-5 md:py-6 lg:py-[22px] flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-[13px] xsm:text-sm sm:text-base leading-[26px] lg:leading-[38px] font-Arial font-small text-white">
            Copyright <span className="text-[#fff]"> ©</span>{" "}
            <span className="text-[#006600]">
              {new Date().getFullYear()} Thim-Dorji.
            </span>{" "}
            All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer3;