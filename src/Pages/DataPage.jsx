import React from "react";
import { data } from "../Utils/boxPhoto";

const DataPage = () => {
  return (
    <div className=" mt-[8vh] bg-[#ebeae6] w-full flex flex-col">
      <h1 className="text-[#584039] text-[2rem] font-cormorant">
        A Data-driven and Personalized Service That You Can Trust
      </h1>
      <div className="mt-6 p-1 text-[0.7rem] md:text-[1.2rem]">
        Sick of the unclear timelines, vague pricing and mediocre execution that
        often come with interior design? <br /> Hipcouch is here to change that.
        We go the extra mile to give you a service that’s delightfully smooth.
      </div>

      <div className="hidden md:flex flex-wrap justify-evenly  mt-[6vh] w-full ">
        {data.map((info, i) => (
          <div className="hidden md:flex flex-col w-[22%] md:w-[20%] mt-2 ">
            <div className="w-[full] h-[10vh] md:h-[30vh] bg-red-300 m-2">
              <img src={info.img} className="h-full w-full" />
            </div>
            <div className=" md:mt-[6vh] text-[0.7rem] text-[#584039] md:text-[1.2rem]">
              {info.title}
            </div>
            <div className='mt-[4vh]  text-black text-[1rem]'>
                        {info.info}
                    </div>
          </div>
        ))}
      </div>

      <div className="md:hidden flex flex-wrap justify-evenly mt-[6vh] w-full">
        {data.map((info, i) => (
          <div
            className={`flex m-2 w-full ${i % 2 !== 0 ? "flex-row-reverse" : ""}`}
            key={i}
          >
            <div className="w-[45%] h-[20vh] md:h-[30vh] m-2">
              <img src={info.img} className='w-full h-full object-cover drop-shadow-2xl' alt={info.title} />
            </div>
            <div className="w-[45%] flex flex-col items-center justify-center">
              <div className="mt-4 text-[0.7rem] text-[#584039] md:text-[0.7rem]">
                {info.title}
              </div>
              <div className="mt-2 text-black text-[0.7rem]">{info.info}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataPage;
