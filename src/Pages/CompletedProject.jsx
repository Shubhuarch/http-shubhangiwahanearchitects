import React, { useState, useEffect, useRef } from "react";
import cm1 from "../assets/completed projects/cm1.jpg";
import cm2 from "../assets/completed projects/cm2.jpg";
import cm3 from "../assets/completed projects/cm3.jpg";
import cm4 from "../assets/completed projects/cm4.jpg";
import cm5 from "../assets/completed projects/cm5.jpg";
import cm6 from "../assets/completed projects/cm6.jpg";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const images = [cm1, cm2, cm3, cm4, cm5, cm6];

const CompletedProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);
  const sliderRef = useRef(null);

  const totalImages = images.length;
  const imagesPerSlide = 3;

  // Duplicate images for seamless infinite scrolling
  const clonedImages = [...images, ...images, ...images];

  // Move to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Move to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // Automatically slide every 2 seconds
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      handleNext();
    }, 2000);

    return () => {
      clearInterval(slideInterval.current);
    };
  }, []);

  // Handle automatic sliding and reset to avoid jump
  useEffect(() => {
    if (currentIndex >= images.length) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setCurrentIndex(0);
      }, 500); // Wait until the sliding animation completes

      setTimeout(() => {
        sliderRef.current.style.transition = "transform 0.5s ease-in-out";
      }, 1000); // Re-enable transition after resetting
    } else if (currentIndex < 0) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setCurrentIndex(clonedImages.length - imagesPerSlide);
      }, 500); // Wait until the sliding animation completes

      setTimeout(() => {
        sliderRef.current.style.transition = "transform 0.5s ease-in-out";
      }, 1000); // Re-enable transition after resetting
    }
  }, [currentIndex]);

  return (
    <div>
        <h1 className="text-[#584039] text-[2rem] mt-4 font-cormorant">Some completed projects</h1>
        <div className="flex justify-center">
      <div className="relative w-[90%] overflow-hidden mt-[5vh]">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{
            transform: `translateX(-${(currentIndex * 100) / imagesPerSlide}%)`,
          }}
          ref={sliderRef}
        >
          {clonedImages.map((img, index) => (
            <div key={index} className="min-w-[33.33%] flex-shrink-0">
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-[20vh] md:h-[300px] "
              />
            </div>
          ))}
        </div>

        {/* Left arrow button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 bg-gray-700 text-white p-2 rounded-full z-10 transform -translate-y-1/2 bg-opacity-50 text-[0.7rem] md:text-[1rem]"
        >
         <FaChevronLeft/>
        </button>

        {/* Right arrow button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-1 md:right-4 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full z-10 transform -translate-y-1/2 text-[0.7rem] md:text-[1rem]"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
    </div>
  );
};

export default CompletedProject;
