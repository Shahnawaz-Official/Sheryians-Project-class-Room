import React from 'react'
import { IoMdReturnRight } from "react-icons/io";

function Button() {
  return (
    <div className='min-w-35  flex items-center justify-between py-1 text-zinc-700 font-semibold cursor-pointer  px-4 bg-zinc-400 rounded-full  '>
      <span>Get stated</span>
      <IoMdReturnRight />
    </div>
  )
}

export default Button