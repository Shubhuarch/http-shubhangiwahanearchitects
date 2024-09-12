import React, { useEffect, useState } from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Slidebar = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      className="relative w-full h-[30vh] md:h-[80vh] overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
            index === currentIndex
              ? "translate-x-0"
              : index < currentIndex
              ? "-translate-x-full"
              : "translate-x-full"
          } ${isHovered ? "blur-sm" : ""}`}
          style={{
            zIndex: index === currentIndex ? 10 : 0,
          }}
        >
          <img
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover brightness-75"
          />
        </div>
      ))}
      <div className=" absolute inset-0 md:flex w-full h-full items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className=" hidden md:flex justify-between w-full h-full p-4 text-white items-center">
          <div className="flex flex-col items-center space-y-4 bg-black bg-opacity-50 p-6 h-fit rounded-lg">
            <p className="text-2xl font-bold">WELCOME TO COMPANY NAME</p>
            <p className="text-xl">The Studio of Enthusiasm</p>
            <div className="text-center">
              <p>We at Company Name</p>
              <p>Help you</p>
              <p>To build a better future</p>
            </div>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
              Contact Us
            </button>
          </div>

          <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50  w-[6vh] p-10 ">
            <div className="flex flex-col justify-evenly h-[60%] items-center text-[2rem] w-full">
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <CiFacebook />
              </a>
              <a href="">
                <FaLinkedinIn />
              </a>
              <a href="">
                <FaXTwitter />
              </a>
              {/* <a href=""></a>
            <a href=""></a> */}
            </div>
          </div>
        </div>
        <div className="md:hidden flex text-white items-center w-full h-full justify-between">
          <div className="flex flex-col items-center space-y-4 bg-black bg-opacity-50 p-6 h-fit rounded-lg text-[0.5rem]">
            <p className=" font-bold">WELCOME TO COMPANY NAME</p>
            <p className="">The Studio of Enthusiasm</p>
            <div className="text-center">
              <p>We at Company Name</p>
              <p>Help you</p>
              <p>To build a better future</p>
            </div>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
              Contact Us
            </button>
          </div>

          <div className="flex flex-col items-center justify-center h-[80%] bg-black bg-opacity-50 p-2">
            <div className="flex flex-col justify-evenly h-[80%] items-center text-[0.8rem] ">
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <CiFacebook />
              </a>
              <a href="">
                <FaLinkedinIn />
              </a>
              <a href="">
                <FaXTwitter />
              </a>
              {/* <a href=""></a>
            <a href=""></a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
