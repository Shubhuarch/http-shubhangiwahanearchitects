import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-[90vh] bg-gray-400">
      <div className="flex flex-col md:flex-row items-center md:items-start md:pt-10 justify-between md:justify-evenly h-full">
        <div className="h-[45%] flex flex-col justify-evenly text-[1.5rem] ">
            <div className="flex w-ful">Lets Contact</div>
          <Link
            to="/contact"
            className="flex w-full font-semibold "
          >
            Contact Us
          </Link>
          <a className="flex w-ful" href="tel:917738700860">Call Us 7738700860</a>
          <a className="flex w-ful" href="mailto:yourmail@gmail.com">yourmail@gmail.com</a>
        </div>

        <div className="h-[45%] flex flex-col justify-evenly text-[1.5rem] ">
            <div className="flex w-ful">Lets Contact</div>
          <Link
            to="/contact"
            className="flex w-full font-semibold "
          >
            Contact Us
          </Link>
          <a className="flex w-ful" href="tel:917738700860">Call Us 7738700860</a>
          <a className="flex w-ful" href="mailto:yourmail@gmail.com">yourmail@gmail.com</a>
        </div>

        <div className="h-[45%] flex flex-col justify-evenly text-[1.5rem] ">
            <div className="flex w-ful">Lets Contact</div>
          <Link
            to="/contact"
            className="flex w-full font-semibold "
          >
            Contact Us
          </Link>
          <a className="flex w-ful" href="tel:917738700860">Call Us 7738700860</a>
          <a className="flex w-ful" href="mailto:yourmail@gmail.com">yourmail@gmail.com</a>
        </div>

        <div className="h-[45%] flex flex-col justify-evenly text-[1.5rem] ">
            <div className="flex w-ful">Lets Contact</div>
          <Link
            to="/contact"
            className="flex w-full font-semibold "
          >
            Contact Us
          </Link>
          <a className="flex w-ful" href="tel:917738700860">Call Us 7738700860</a>
          <a className="flex w-ful" href="mailto:yourmail@gmail.com">yourmail@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
