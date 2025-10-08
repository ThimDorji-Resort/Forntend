import { BsCheck2 } from "react-icons/bs";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { useEffect, useState } from "react";

const ServiceDetails = () => {
  const [menu, setMenu] = useState([]);
  const [showItem, setShowItem] = useState([]);

  useEffect(() => {
    fetch("/food.menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setShowItem(data);
      });
  }, []);

  return (
    <section className="bg-white text-gray-700 font-['Inter']">
      <BreadCrumb title="Service Details" />

      {/* Service Details content */}
      <div className="py-20 2xl:py-[120px] bg-white">
        <div className="Container">
          {/* image */}
          <div className="grid items-center grid-cols-6 md:grid-cols-7 lg:grid-cols-6 gap-5">
            <div
              className="col-span-6 md:col-span-7 lg:col-span-6"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <img
                src="/images/home/services/pic.png"
                alt="service details"
                className="w-full h-auto md:h-[560px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Restaurant Description */}
          <div className="pt-10 lg:pt-[45px] pr-3">
           
            <h2 className="py-3 font-semibold text-[26px] sm:text-3xl lg:text-4xl text-black">
              The Restaurant Center
            </h2>
            <p className="text-base leading-7 text-gray-600 font-normal">
              Rapidiously myocardinate cross-platform intellectual capital after
              marketing model. Appropriately create interactive infrastructures
              after maintainable are Holisticly facilitate stand-alone inframe
              extend state of the art benefits via web-enabled value.
            </p>

            {/* Restaurant Rules */}
            <div
              className="py-10 lg:py-[60px]"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h2 className="pb-4 font-semibold text-2xl text-black">
                Restaurant Rules
              </h2>
              <p className="text-base leading-7 text-gray-600 font-normal">
                Professionally deliver fully researched scenarios with turnkey
                communities. Competently unleash empowered applications without
                seamless data.
              </p>
            </div>

            {/* Dress Code Rules */}
            <div
              className="pb-10 lg:pb-[60px]"
              data-aos="zoom-in-up"
              data-aos-duration="1000"
            >
              <h2 className="pb-4 font-semibold text-2xl text-black">
                Dress Code
              </h2>
              <p className="text-base leading-7 text-gray-600 font-normal">
                Professionally deliver fully researched scenarios with turnkey
                communities competently.
              </p>
              <ul className="space-y-3 mt-5">
                <li className="flex items-center">
                  <BsCheck2 size={18} className="text-khaki mr-2" />
                  <span className="text-base text-gray-700">
                    Quickly generate bricks-and-clicks
                  </span>
                </li>
                <li className="flex items-center">
                  <BsCheck2 size={18} className="text-khaki mr-2" />
                  <span className="text-base text-gray-700">
                    Interactively cultivate visionary platforms
                  </span>
                </li>
                <li className="flex items-center">
                  <BsCheck2 size={18} className="text-khaki mr-2" />
                  <span className="text-base text-gray-700">
                    Energistically envisioneer resource
                  </span>
                </li>
              </ul>
            </div>

            {/* Terrace Rules */}
            <div data-aos="zoom-in-up" data-aos-duration="1000">
              <h2 className="pb-4 font-semibold text-2xl text-black">
                Terrace
              </h2>
              <p className="text-base leading-7 text-gray-600 font-normal">
                Open the drinks only maintain restaurant rules and regulations
                below.
              </p>
              <ul className="space-y-3 mt-5">
                <li className="flex items-center">
                  <BsCheck2 size={18} className="text-khaki mr-2" />
                  <span className="text-base text-gray-700">
                    Quickly generate bricks-and-clicks
                  </span>
                </li>
                <li className="flex items-center">
                  <BsCheck2 size={18} className="text-khaki mr-2" />
                  <span className="text-base text-gray-700">
                    Interactively cultivate visionary platforms
                  </span>
                </li>
                <li className="flex items-center">
                  <BsCheck2 size={18} className="text-khaki mr-2" />
                  <span className="text-base text-gray-700">
                    Energistically envisioneer resource
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default ServiceDetails;
