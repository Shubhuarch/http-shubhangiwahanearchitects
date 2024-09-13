import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Slidebar from '../Components/Slidebar'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='bg-[#ebeae6]'>
      <Slidebar />
      <button 
        className='bg-gray-400 p-4 rounded-lg mt-2'
        onClick={toggleModal}
      >
        Book Whatever You want
      </button>
      
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
    </div>
  )
}

export default Home