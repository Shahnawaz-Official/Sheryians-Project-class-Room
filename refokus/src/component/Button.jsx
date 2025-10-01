import React from 'react'
import { IoMdReturnRight } from "react-icons/io";

function Button({title ="Get stated" }) {
  return (
    <div className='max-w-72  flex items-center gap-7 py-1 text-zinc-700 font-semibold cursor-pointer  px-4 bg-zinc-400 rounded-full  '>
      <span>{title}</span>
      <IoMdReturnRight />
    </div>
  )
}

export default Button