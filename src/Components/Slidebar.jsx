import React, { useEffect, useState } from "react";
import img1 from "../assets/imag1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

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
      className="relative w-full h-[30vh] md:h-[85vh] overflow-hidden group border "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${
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
      <div className=" absolute inset-0 md:flex w-full h-full justify-end items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className=" hidden md:flex justify-center w-[65%] h-full p-4 text-white items-center">
          <div className="flex flex-col items-center space-y-4 bg-[#998975]  bg-opacity-50 p-6 h-fit rounded-lg">
            <p className="text-2xl font-bold">WELCOME TO COMPANY NAME</p>
            <p className="text-xl">The Studio of Enthusiasm</p>
            <div className="text-center">
              <p>We at Company Name</p>
              <p>Help you</p>
              <p>To build a better future</p>
            </div>
            <button className="mt-4 px-6 py-2 bg-[#c0ad95] hover:bg-[#b4a188] text-white rounded-full  transition-colors duration-300">
              Contact Us
            </button>
          </div>

          <div className="flex flex-col items-center ml-auto justify-center h-[80%] w-[6vh] p-10 ">
            <div className="flex flex-col justify-evenly h-[50%] items-center text-[1.7rem] w-full ">
              <a href="https://www.instagram.com/shubhangiwahanearchitects/" className="hover:text-[#584039]" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61559404326535" className="hover:text-[#584039]"  target="_blank">

                <CiFacebook />
              </a>
              <a href="https://www.linkedin.com/in/shubhangi-wahane/" className="hover:text-[#584039]" target="_blank">
                <FaLinkedinIn />
              </a>
              <a href="https://wa.me/+917738700860?text=Hi I want to book a Consultation " className="hover:text-[#584039]" target="_blank">
              <FaWhatsapp />

              </a>
              {/* <a href=""></a>
            <a href=""></a> */}
            </div>
          </div>
        </div>

{/* phone screen */}
        <div className="md:hidden flex text-white items-center w-full h-full justify-between">
          <div className="flex flex-col items-center space-y-4 bg-[#584039]  p-6 h-fit rounded-lg text-[0.5rem]">
            {/* <p className=" font-bold">WELCOME TO COMPANY NAME</p> */}
            <p className="">The Studio of Enthusiasm</p>
            <div className="text-center">
              <p>We at Company Name</p>
              <p>Help you</p>
              <p>To build a better future</p>
            </div>
         
              <Link  to="/contact" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
              Contact Us
              </Link>
              {/* <Link
                  to="/contact"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  // onClick={toggleMenu}
                >
                  Contact Us
                </Link> */}
           
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
