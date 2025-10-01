import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width,start ,para,heading="Let`s go To It Togather",mainheading = "Get in Touch"}) {
  return (
    <div className={`${width} p-5 rounded-xl bg-zinc-800 `}>
      <div className='w-full min-h-[25rem] flex flex-col justify-between'>
       <div>
         <div className='w-full flex justify-between items-center'>
          <h1 className='text-[13px] uppercase  text-zinc-500'>{mainheading}</h1>
          <IoIosArrowRoundForward size={24} />
        </div>
        <div className='mt-5'>
          <h3 className='text-3xl font-medium '>{heading}</h3>
        </div>
       </div>
        

        <div className='mt-10 flex flex-col gap-4'>
          {start && 
          <>
          <h1 className='text-6xl font-medium'>Start a Project</h1>
          <button className='py-2 px-5 rounded-full border-[1px] border-zinc-600 w-max'>Contact us</button>
          </>
          }

          {para && <p className='mt-5 text-[12px] text-zinc-600'>
          Lorem ipsum dolor sit amet consectetur.
        </p>}
        </div>

        
      </div>
    </div>
  )
}

export default Card
