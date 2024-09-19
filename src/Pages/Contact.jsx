import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("number", number);
      formData.append("message", message);
      formData.append("access_key", process.env.REACT_APP_ACCESS_KEY); // move access key to env later
      // console.log({ name, email, number, message });
      console.log("tryiing....");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      console.log("res");

      console.log(response);

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        toast.success("Message sent successfully!");
        // Reset form fields
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 w-full">
      <h1 className="font-bold mb-6 text-center">Contact Us</h1>
      {/* <button onClick={()=>{toast.success("Message sent successfully!");}} >check</button> */}
      <div className="w-full mx-auto flex justify-evenly flex-col md:flex-row">
        <div className="md:w-[45%] flex flex-col">
          <h1>We would love to hear from you!</h1>
          <p>Email: {process.env.REACT_APP_EMAIL}</p>
          <p>Phone or WhatsApp: {process.env.REACT_APP_PHONE}</p>
          <form onSubmit={handleSubmit} className="space-y-4 md:w-full">
            <div className="">
              <label htmlFor="name" className="mb-1 font-medium flex">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="w-[45%]">
                <label htmlFor="email" className="flex mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="w-[45%]">
                <label htmlFor="number" className="flex mb-1 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="flex mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="md:w-[45%] p-4 mt-2 md:mt-0 md:bg-opacity-50 rounded-2xl ">
          <h1 className="font-bold md:text-2xl mb-2">YOUR COMPANY NAMWE</h1>
          <div className="flex flex-wrap w-full md:w-[70%] text-left p-4 md:pl-[6vh]">
            For questions, technical assistance, or collaboration opportunities
            via the contact information provided.
          </div>

          <div className="md:w-[70%] md:pl-[9vh]">
            <div className="w-full flex m-2">
              <FaPhoneAlt /> <p className="pl-2">+91 0000000000</p>{" "}
            </div>
            <div className="w-full flex m-2">
              <IoMdMailUnread />
              <p className="pl-2">yourmail@gmail.com</p>{" "}
            </div>
            <div className="w-full flex m-2">
              <FaLocationDot /> <p className="pl-2">Some Address Here</p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
