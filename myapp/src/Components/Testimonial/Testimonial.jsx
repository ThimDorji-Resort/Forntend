import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "../../Components4/Testimonial/testimonials.css";
import "keen-slider/keen-slider.min.css";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true); // make arrows/dots usable when ready
    },
  });

  const prev = () => instanceRef.current?.prev();
  const next = () => instanceRef.current?.next();

  return (
    <section className="bg-[url('/images/home/background.png')] bg-[rgba(30,30,30,0.4)] dark:bg-[rgba(30,30,30,0.6)] bg-opacity-40 grid items-center justify-center bg-no-repeat bg-cover font-Inter">
      <div className="Container py-20 lg:py-[120px]">
        {/* Title */}
        <div
          className="text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px] mx-auto px-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex items-center justify-center space-x-2 mb-4 lg:mb-5">
            <hr className="w-[100px] h-[1px] text-lightBlack" />
            <hr className="w-[100px] h-[1px] text-lightBlack" />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[42px] 2xl:leading-[52px] text-lightBlack mt-[20px] mb-[16px] font-semibold uppercase">
            Customer's Testimonial
          </h1>
          <p className="leading-7 lg:leading-[26px] text-lightBlack font-normal text-sm sm:text-base">
            Hear from our guests who have experienced the comfort and Bhutanese hospitality at Thim Dorji Resort. Their stories
            reflect the memorable stays.
          </p>
        </div>

        {/* Small screens: single card */}
        <div className="mt-14 sm:hidden px-1" data-aos="fade-up" data-aos-duration="1000">
          <div className="py-[10px] pt-4 sm:hidden">
            <div className="bg-white dark:bg-normalBlack p-5 md:p-10 relative before:absolute before:w-[85%] before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0 sm:hidden">
              <img src="/images/home-1/testi-quote.png" alt="" className="absolute right-3 xl:right-10 -top-8" />
              <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal xl:text-lg mt-[30px] italic mb-[45px] relative">
                "Professionally repurpose flexible testing procedures via molla in customer service. Dynamically reconceptualize
                value-added systems before manufactured products. Enthusiastically envisioneer emerging best"
              </p>
              <div className="flex items-center space-x-6">
                <img src="/images/home-1/testi-author.png" className="w-[65px] h-[65px]" alt="" />
                <div>
                  <h4 className="text-base lg:text-[22px] text-lightBlack dark:text-white font-semibold">Maicle clork</h4>
                  <p className="pt-1 text-sm md:text-base text-gray dark:text-lightGray flex items-center">
                    <span className="w-5 h-[1px] inline-block bg-khaki mr-2" />
                    Manager
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider wrapper with overflow visible so arrows can sit outside */}
        <div className="relative mt-14 2xl:mt-[60px] overflow-visible">
          {/* arrows: OUTSIDE, further from the cards */}
          {loaded && instanceRef.current && (
            <>
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={prev}
                className="hidden sm:flex items-center justify-center
                           absolute -left-16 md:-left-20 xl:-left-28 top-1/2 -translate-y-1/2
                           w-11 h-11 rounded-full bg-[#006600] text-white shadow-lg
                           hover:bg-[#004d00] focus:outline-none focus:ring-2 focus:ring-[#006600]/30 transition pointer-events-auto"
              >
                <BsChevronLeft className="text-xl" />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                onClick={next}
                className="hidden sm:flex items-center justify-center
                           absolute -right-16 md:-right-20 xl:-right-28 top-1/2 -translate-y-1/2
                           w-11 h-11 rounded-full bg-[#006600] text-white shadow-lg
                           hover:bg-[#004d00] focus:outline-none focus:ring-2 focus:ring-[#006600]/30 transition pointer-events-auto"
              >
                <BsChevronRight className="text-xl" />
              </button>
            </>
          )}

          {/* Keen slider */}
          <div ref={sliderRef} className="keen-slider hidden sm:block">
            {/* Slide 1 */}
            <div className="keen-slider__slide">
              <div className="py-[10px] pt-10">
                <div className="bg-white dark:bg-normalBlack p-5 md:p-10 relative before:absolute before:w-[85%] before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0">
                  <img src="/images/home/round.png" alt="" className="absolute right-3 xl:right-10 -top-8 mt-10" />
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal xl:text-lg mt-[30px] italic mb-[45px] relative">
                    "Professionally repurpose flexible testing procedures via molla in customer service. Dynamically reconceptualize
                    value-added systems before manufactured products. Enthusiastically envisioneer emerging best"
                  </p>
                  <div className="flex items-center space-x-6">
                    <img src="/images/home/boy.jpg" className="w-[65px] h-[65px]" alt="" />
                    <div>
                      <h4 className="text-base lg:text-[22px] text-lightBlack dark:text-white font-semibold">Marina Trange</h4>
                      <p className="pt-1 text-sm md:text-base text-gray dark:text-lightGray flex items-center">
                        <span className="w-5 h-[1px] inline-block bg-khaki mr-2" />
                        Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="keen-slider__slide">
              <div className="py-[10px] pt-10">
                <div className="bg-white dark:bg-normalBlack p-5 md:p-10 relative before:absolute before:w-[85%] before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0">
                  <img src="/images/home/round.png" alt="" className="absolute right-3 xl:right-10 -top-8 mt-10" />
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal xl:text-lg mt-[30px] italic mb-[45px] relative">
                    "Professionally repurpose flexible testing procedures via molla in customer service. Dynamically reconceptualize
                    value-added systems before manufactured products. Enthusiastically envisioneer emerging best"
                  </p>
                  <div className="flex items-center space-x-6">
                    <img src="/images/home/boy.jpg" className="w-[65px] h-[65px]" alt="" />
                    <div>
                      <h4 className="text-base lg:text-[22px] text-lightBlack dark:text-white font-semibold">John D. Alexon</h4>
                      <p className="pt-1 text-sm md:text-base text-gray dark:text-lightGray flex items-center">
                        <span className="w-5 h-[1px] inline-block bg-khaki mr-2" />
                        Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="keen-slider__slide">
              <div className="py-[10px] pt-10">
                <div className="bg-white dark:bg-normalBlack p-5 md:p-10 relative before:absolute before:w-[85%] before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0">
                  <img src="/images/home/round.png" alt="" className="absolute right-3 xl:right-10 -top-8 mt-10" />
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal xl:text-lg mt-[30px] italic mb-[45px] relative">
                    "Professionally repurpose flexible testing procedures via molla in customer service. Dynamically reconceptualize
                    value-added systems before manufactured products. Enthusiastically envisioneer emerging best"
                  </p>
                  <div className="flex items-center space-x-6">
                    <img src="/images/home/boy.jpg" className="w-[65px] h-[65px]" alt="" />
                    <div>
                      <h4 className="text-base lg:text-[22px] text-lightBlack dark:text-white font-semibold">Brandon Mack</h4>
                      <p className="pt-1 text-sm md:text-base text-gray dark:text-lightGray flex items-center">
                        <span className="w-5 h-[1px] inline-block bg-khaki mr-2" />
                        Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
    
      </div>
    </section>
  );
};

export default Testimonial;
