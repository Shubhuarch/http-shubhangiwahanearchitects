import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { GiLadder } from "react-icons/gi";

// Custom hook to handle clicks outside of the specified element
const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);

  return ref;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleClickOutside = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const menuRef = useOutsideClick(handleClickOutside);

  return (
    <div className="h-[15vh] md:h-[15vh]  w-full  fixed  z-50 top-0 left-0 bg-[#ebeae6]">
      {/* <div className="text-[0.7rem] md:text-[1rem] pt-2 mb-1 md:h-[2vh]">
        <div>Reach Us @ yourmail@gmail.com</div>
        <div>Call Us +91 0000000000</div>
      </div> */}
      <div className="flex h-full justify-center md:justify-between items-center w-full">
        <div>
          <div className="flex h-full md:h-[12vh]">
            <Link to="/">
              <div className="h-[12vh] mt-[0vh] pl-4">
                <img src={logo} alt="Logo" className="h-full w-full" />
              </div>
            </Link>
          </div>
          <div></div>
        </div>

        <div className="flex w-max items-center text-[#584039] h-[5vh] pr-2 p-2 ">
          <div className="group">
            <Link
              to="/"
              className="hidden md:block text-lg font-semibold hover:text-[#C89A74] p-2 m-2 group"
            >
              Home
            </Link>
            {/* Dropdown that appears on hover */}
            <div className="hidden absolute top-24 w-[25vh] flex-col ml-4 items-start bg-white group-hover:flex ">
              <Link
                to="/link2"
                className=" px-4 py-2 w-full flex text-sm text-gray-700 hover:bg-gray-100"
              >
                Link 2
              </Link>
              <Link
                to="/link3"
                className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Link 3
              </Link>
            </div>
          </div>

          <div className="group">
            <Link
              to="/"
              className="hidden md:block text-lg font-semibold hover:text-[#C89A74] p-2 m-2 group"
            >
              Architecture
            </Link>
            {/* Dropdown that appears on hover */}
            <div className="hidden absolute top-24 w-[25vh] flex-col ml-4 items-start bg-white group-hover:flex ">
              <Link
                to="/link2"
                className=" px-4 py-2 w-full flex text-sm text-gray-700 hover:bg-gray-100"
              >
                Link 2
              </Link>
              <Link
                to="/link3"
                className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Link 3
              </Link>
            </div>
          </div>

          <div className="group">
            <Link
              to="/"
              className="hidden md:block text-lg font-semibold hover:text-[#C89A74] p-2 m-2 group"
            >
               Interior Design
            </Link>
            {/* Dropdown that appears on hover */}
            <div className="hidden absolute top-24 w-[25vh] flex-col ml-4 items-start bg-white group-hover:flex ">
              <Link
                to="/link2"
                className=" px-4 py-2 w-full flex text-sm text-gray-700 hover:bg-gray-100"
              >
                Link 2
              </Link>
              <Link
                to="/link3"
                className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Link 3
              </Link>
            </div>
          </div>

           <div className="group">
            <Link
              to="/"
              className="hidden md:block text-lg font-semibold hover:text-[#C89A74] p-2 m-2 group"
            >
                Interior Design
            </Link>
            {/* Dropdown that appears on hover */}
            <div className="hidden absolute top-24 w-[25vh] flex-col ml-4 items-start bg-white group-hover:flex ">
              <Link
                to="/link2"
                className=" px-4 py-2 w-full flex text-sm text-gray-700 hover:bg-gray-100"
              >
                Link 2
              </Link>
              <Link
                to="/link3"
                className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Link 3
              </Link>
            </div>
          </div>

           <div className="group">
            <Link
              to="/"
              className="hidden md:block text-lg font-semibold hover:text-[#C89A74] p-2 m-2 group"
            >
                AI Corner
            </Link>
            {/* Dropdown that appears on hover */}
            <div className="hidden absolute top-24 w-[25vh] flex-col ml-4 items-start bg-white group-hover:flex ">
              <Link
                to="/link2"
                className=" px-4 py-2 w-full flex text-sm text-gray-700 hover:bg-gray-100"
              >
                Link 2
              </Link>
              <Link
                to="/link3"
                className="flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Link 3
              </Link>
            </div>
          </div>
          <Link
            to="/contact"
            className="hidden md:block text-lg font-semibold  hover:text-[#C89A74] p-2 m-2"
          >
            Contact Us
          </Link>

          <Link
            to="/contact"
            className="hidden md:block text-lg font-semibold border border-[#584039]  hover:text-[#C89A74] p-2 m-2 rounded-lg"
          >
            Book a Consultation
          </Link>

          <div ref={menuRef} className="hidden relative">
            <button onClick={toggleMenu} className="p-2 text-[2rem]">
              <GiLadder />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-[40vh] h-screen pr-0 bg-gray-500 rounded-md shadow-lg py-1 z-[60]">
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
                <Link
                  to="/link2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Link 2
                </Link>
                <Link
                  to="/link3"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Link 3
                </Link>
                <Link
                  to="/link1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Link 1
                </Link>
                <Link
                  to="/link2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Link 2
                </Link>
                <Link
                  to="/link3"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Link 3
                </Link>
                <Link
                  to="/link1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Link 1
                </Link>
                <Link
                  to="/link2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Link 2
                </Link>
                <Link
                  to="/link3"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Link 3
                </Link>
                <Link
                  to="/link1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Link 1
                </Link>
                <Link
                  to="/link2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Link 2
                </Link>
                <Link
                  to="/link3"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Link 3
                </Link>
                <Link
                  to="/link1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Link 1
                </Link>
                <Link
                  to="/link2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Link 2
                </Link>
                <Link
                  to="/link3"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Link 3
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
