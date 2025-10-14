import React, { useState } from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";

const Team = () => {
  const galleryImages = [
    { src: "/images/inner/one.jpeg", name: "Culture" },
    { src: "/images/inner/two.jpeg", name: "Plaza 1" },
    { src: "/images/inner/three.jpeg", name: "Standard Duluxe" },
    { src: "/images/inner/four.jpeg", name: "Double Bed" },
    { src: "/images/inner/five.jpeg", name: "Entrance" },
    { src: "/images/inner/six.jpeg", name: "Lobby" },
    { src: "/images/inner/seven.jpeg", name: "Restaurant" },
    { src: "/images/inner/eight.jpeg", name: "Twin D" },
    { src: "/images/inner/nine.jpeg", name: "Twin D" },
    { src: "/images/inner/ten.jpeg", name: "Entrance" },
    { src: "/images/inner/eleven.jpeg", name: "Corridor" },
    { src: "/images/inner/twelve.jpeg", name: "Buffet" },
    { src: "/images/inner/thirteen.jpeg", name: "Plaza 2" },
    { src: "/images/inner/fourteen.jpeg", name: "Room" },
    { src: "/images/inner/fifteen.jpeg", name: "Parking" },
    { src: "/images/inner/sixteen.jpeg", name: "Restaurant" },
  ];

  const rows = [
    galleryImages.slice(0, 8),
    galleryImages.slice(8, 16),
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);
  const prevImage = () =>
    setSelectedImageIndex(
      selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1
    );
  const nextImage = () =>
    setSelectedImageIndex(
      selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1
    );

  // Helper to render each image with hover effect
  const ImageItem = ({ img, idx, className }) => (
    <div
      className={`relative group cursor-pointer ${className}`}
      onClick={() => openModal(idx)}
    >
      <img
        src={img.src}
        alt={img.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
        <span className="text-white font-regular text-xl">{img.name}</span>
      </div>
    </div>
  );

  return (
    <div>
      <BreadCrumb title="Gallery" />

      <div className="dark:bg-normalBlack py-6 mb-14 2xl:py-[120px]">
        <div className="Container">


          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-rows-2 lg:gap-[30px] mt-[60px]">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-3 gap-[30px]">
                {/* Left Column */}
                <div className="flex flex-col space-y-5 h-full">
                  {row.slice(0, 3).map((img, idx) => (
                    <ImageItem
                      key={idx}
                      img={img}
                      idx={rowIndex * 8 + idx}
                      className="flex-1"
                    />
                  ))}
                </div>

                {/* Middle Column (Taller) */}
                <div className="flex flex-col space-y-5 h-full">
                  {row.slice(3, 5).map((img, idx) => (
                    <ImageItem
                      key={idx}
                      img={img}
                      idx={rowIndex * 8 + 3 + idx}
                      className="flex-1"
                    />
                  ))}
                </div>

                {/* Right Column */}
                <div className="flex flex-col space-y-5 h-full">
                  {row.slice(5, 8).map((img, idx) => (
                    <ImageItem
                      key={idx}
                      img={img}
                      idx={rowIndex * 8 + 5 + idx}
                      className="flex-1"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:flex lg:hidden flex-col space-y-5 mt-[60px]">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="space-y-5">
                <div className="flex gap-5">
                  {row.slice(0, 3).map((img, idx) => (
                    <ImageItem
                      key={idx}
                      img={img}
                      idx={rowIndex * 8 + idx}
                    />
                  ))}
                </div>

                <div className="flex gap-10">
                  {row.slice(3, 5).map((img, idx) => (
                    <div key={idx} className="w-1/2">
                      <ImageItem
                        img={img}
                        idx={rowIndex * 8 + 3 + idx}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex gap-5">
                  {row.slice(5, 8).map((img, idx) => (
                    <ImageItem
                      key={idx}
                      img={img}
                      idx={rowIndex * 8 + 5 + idx}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col space-y-5 md:hidden mt-[60px]">
            {galleryImages.map((img, idx) => (
              <ImageItem key={idx} img={img} idx={idx} />
            ))}
          </div>

          {/* Modal / Lightbox */}
          {selectedImageIndex !== null && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-5">
              <button
                onClick={closeModal}
                className="absolute top-5 right-10 text-white text-4xl font-bold"
              >
                &times;
              </button>

              <button
                onClick={prevImage}
                className="absolute left-10 text-white text-4xl font-regular"
              >
                &#10094;
              </button>

              <img
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].name}
                className="max-h-[90%] max-w-[90%] object-contain "
              />

              <button
                onClick={nextImage}
                className="absolute right-10 text-white text-4xl font-regular"
              >
                &#10095;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
