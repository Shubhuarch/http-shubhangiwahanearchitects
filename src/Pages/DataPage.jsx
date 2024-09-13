import React from 'react'
import { data } from '../Utils/boxPhoto'

const DataPage = () => {
  return (
    <div className=' mt-[8vh] bg-[#ebeae6]'>
        <h1 className='text-[#584039] text-[2rem] font-cormorant'>A Data-driven and Personalized Service That You Can Trust</h1>
        <div className='mt-6 text-[1.2rem]'>
        Sick of the unclear timelines, vague pricing and mediocre execution that often come with interior design? <br/> Hipcouch is here to change that. We go the extra mile to give you a service that’s delightfully smooth.
        </div>

        <div className='flex justify-center mt-[6vh]'>
            {data.map((info,i)=>(
                <div className='flex flex-col w-[18%] m-2 mt-2'>
                    <div className='w-[full] h-[30vh] bg-red-300 m-2'>
                        <img src={info.img} />
                    </div>
                    <div className='mt-[6vh]  text-[#584039] text-[1.2rem]'>
                        {info.title}
                    </div>
                    <div className='mt-[4vh]  text-black text-[1rem]'>
                        {info.info}
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default DataPage