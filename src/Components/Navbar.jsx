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

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
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
    <div className="h-[22vh] w-full bg-slate-200">
      <div className="h-[2vh]">Reach Us @ yourmail@gmail.com</div>
      <div className="flex justify-between w-full">
        <div className="flex h-[20vh]">
          <div className="h-full pl-4">
            <img src={logo} alt="Logo" className="h-full w-full" />
          </div>
        </div>

        <div className="flex w-max items-center h-[5vh] pr-10">
          <Link
            to="/"
            className="text-lg font-semibold text-gray-800 hover:text-blue-600 p-2 m-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg font-semibold text-gray-800 hover:text-blue-600 p-2 m-2"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-lg font-semibold text-gray-800 hover:text-blue-600 p-2 m-2"
          >
            Contact Us
          </Link>

          <div ref={menuRef} className="relative">
            <button onClick={toggleMenu} className="p-2">
              <GiLadder />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-[40vh] pr-0 bg-white rounded-md shadow-lg py-1 z-10">
                <Link to="/link1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 1</Link>
                <Link to="/link2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 2</Link>
                <Link to="/link3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 3</Link>
                <Link to="/link1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 1</Link>
                <Link to="/link2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 2</Link>
                <Link to="/link3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 3</Link>
                <Link to="/link1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 1</Link>
                <Link to="/link2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 2</Link>
                <Link to="/link3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 3</Link>
                <Link to="/link1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 1</Link>
                <Link to="/link2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 2</Link>
                <Link to="/link3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 3</Link>
                <Link to="/link1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 1</Link>
                <Link to="/link2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 2</Link>
                <Link to="/link3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Link 3</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;