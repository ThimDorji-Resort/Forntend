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
      "(min-width: 568px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
    slides: { perView: 1 }, // Default for mobile (below 568px)
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
            Hear from our guests who have experienced the comfort and Bhutanese
            hospitality at Thim Dorji Resort. Their stories reflect the
            memorable stays.
          </p>
        </div>

        {/* Slider wrapper with overflow visible so arrows can sit outside */}
        <div className="relative mt-14 2xl:mt-[60px] overflow-visible">
          {/* Navigation buttons - positioned at the edges on mobile */}
          {loaded && instanceRef.current && (
            <>
              {/* Left arrow */}
              <button
                type="button"
                aria-label="Previous testimonials"
                onClick={prev}
                className="flex items-center justify-center
             absolute left-2 sm:left-4 md:-left-16 xl:-left-24 top-1/2 -translate-y-1/2
             w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#006600] text-white shadow-lg
             hover:bg-[#004d00] focus:outline-none focus:ring-2 focus:ring-[#006600]/30 transition pointer-events-auto z-10"
              >
                <BsChevronLeft className="text-base sm:text-lg md:text-xl" />
              </button>

              {/* Right arrow */}
              <button
                type="button"
                aria-label="Next testimonials"
                onClick={next}
                className="flex items-center justify-center
             absolute right-2 sm:right-4 md:-right-16 xl:-right-24 top-1/2 -translate-y-1/2
             w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#006600] text-white shadow-lg
             hover:bg-[#004d00] focus:outline-none focus:ring-2 focus:ring-[#006600]/30 transition pointer-events-auto z-10"
              >
                <BsChevronRight className="text-base sm:text-lg md:text-xl" />
              </button>
            </>
          )}

          {/* Keen slider - now visible on all screen sizes */}
          <div ref={sliderRef} className="keen-slider">
            {/* Slide 1 */}
            <div className="keen-slider__slide">
              <div className="py-[10px] pt-4 sm:pt-10">
                <div className="bg-white dark:bg-normalBlack p-5 md:p-10 relative before:absolute before:w-[85%] before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0">
                  <img
                    src="/images/home/round.png"
                    alt=""
                    className="absolute right-3 xl:right-10 -top-8 mt-2 sm:mt-10"
                  />
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal xl:text-lg mt-[30px] italic mb-[45px] relative">
                    "Professionally repurpose flexible testing procedures via
                    molla in customer service. Dynamically reconceptualize
                    value-added systems before manufactured products.
                    Enthusiastically envisioneer emerging best"
                  </p>
                  <div className="flex items-center space-x-6">
                    <img
                      src="/images/home/boy.jpg"
                      className="w-[65px] h-[65px]"
                      alt=""
                    />
                    <div>
                      <h4 className="text-base lg:text-[22px] text-lightBlack dark:text-white font-semibold">
                        Marina Trange
                      </h4>
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
              <div className="py-[10px] pt-4 sm:pt-10">
                <div className="bg-white dark:bg-normalBlack p-5 md:p-10 relative before:absolute before:w-[85%] before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0">
                  <img
                    src="/images/home/round.png"
                    alt=""
                    className="absolute right-3 xl:right-10 -top-8 mt-2 sm:mt-10"
                  />
                  <p
                    className="text-[13px] sm:text-[15px] md:text-[16px] lg:text-[17px]
             leading-[22px] sm:leading-[24px] md:leading-[26px]
             text-lightBlack font-normal text-center px-4 sm:px-8 md:px-12"
                  >
                    Hear from our guests who have experienced the comfort and
                    Bhutanese hospitality at Thim Dorji Resort. Their stories
                    reflect the memorable stays.
                  </p>
                  <div className="flex items-center space-x-6">
                    <img
                      src="/images/home/boy.jpg"
                      className="w-[65px] h-[65px]"
                      alt=""
                    />
                    <div>
                      <h4 className="text-base lg:text-[22px] text-lightBlack dark:text-white font-semibold">
                        John D. Alexon
                      </h4>
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
              <div className="py-[10px] pt-4 sm:pt-10">
                <div className="bg-white dark:bg-normalBlack p-5 md:p-10 relative before:absolute before:w-[85%] before:h-[10px] before:bg-khaki before:mx-auto before:-top-[10px] before:left-0 before:right-0 after:absolute after:w-[85%] after:h-[10px] after:bg-khaki after:mx-auto after:-bottom-[10px] after:left-0 after:right-0">
                  <img
                    src="/images/home/round.png"
                    alt=""
                    className="absolute right-3 xl:right-10 -top-8 mt-2 sm:mt-10"
                  />
                  <p className="text-sm sm:text-base leading-[26px] text-gray dark:text-lightGray font-normal xl:text-lg mt-[30px] italic mb-[45px] relative">
                    "Professionally repurpose flexible testing procedures via
                    molla in customer service. Dynamically reconceptualize
                    value-added systems before manufactured products.
                    Enthusiastically envisioneer emerging best"
                  </p>
                  <div className="flex items-center space-x-6">
                    <img
                      src="/images/home/boy.jpg"
                      className="w-[65px] h-[65px]"
                      alt=""
                    />
                    <div>
                      <h4 className="text-base lg:text-[22px] text-lightBlack dark:text-white font-semibold">
                        Brandon Mack
                      </h4>
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
