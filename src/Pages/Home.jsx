import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Slidebar from "../Components/Slidebar";
import DataPage from "./DataPage";
import { data } from "../Utils/boxPhoto";
import HowItWorks from "./HowItWorks";
import { IoClose } from "react-icons/io5";

import CompletedProject from "./CompletedProject";
import Footer from "../Components/Footer";
const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBoxOpen, setIsBoxOpen] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleBox = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  return (
    <div className="bg-[#ebeae6] w-full">
      <Slidebar />

      <DataPage />
      <CompletedProject />
      <HowItWorks />
      <div className="h-[20vh]"></div>
      {/* <button 
        className='bg-gray-400 p-4 rounded-lg mt-2'
        onClick={toggleModal}
      >
        Book Whatever You want
      </button> */}

      <Footer />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-3/4 h-3/4 relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={toggleModal}
            >
              &times;
            </button>
            <iframe
              src="https://calendly.com/shubhangiwahane/free-vastu-consultation-call"
              width="100%"
              height="100%"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}

      {isBoxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-[80%] h-[50%] md:w-[50%] md:h-[50%] relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={toggleBox}
            >
              <IoClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
