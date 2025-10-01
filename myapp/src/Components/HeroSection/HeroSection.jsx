// HeroSection.jsx
import { BiPhoneCall } from "react-icons/bi";
import banner from "../../../public/images/home/banner.png"



const HeroSection = () => {
  return (
     <div
      className="w-full h-[700px] md:h-[800px] xl:h-[850px] 3xl:h-[950px] bg-cover bg-center text-white relative pb-[150px] lg:pb-16 xl:pb-0 grid items-center justify-center"
      style={{ backgroundImage: `url(${banner})` }}
      data-aos="fade-down"
    >
      <div className="2xl:w-[720px] text-center font-inter">
        {/* remove stars + button as requested */}
        <h4 className="text-base mb-4 tracking-wide">LUXURY HOTEL AND RESORT</h4>

        <div className="mb-7 md:mb-8 lg:mb-9 xl:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold
                         leading-[40px] md:leading-[50px] 3xl:leading-[70px]">
           RIVERSIDE SERENITY,
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 3xl:text-6xl font-semibold
                         leading-[40px] lg:leading-[50px] 2xl:leading-[60px]">
            BHUTANESE WARMTH
          </h1>
        </div>
      </div>

      {/* contact info strip (kept) */}
      <div className="w-[221px] h-[50px] border-white border hidden md:flex items-center justify-center
                     absolute left-0 top-1/2 -rotate-90">
        <BiPhoneCall className="w-5 h-5 mr-2 text-khaki" /> +980 123 4567 890
      </div>
    </div>
  );
};

export default HeroSection;
