import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Topnav() {
  return (
    <>
    <div className='w-full h-[7vw] flex relative justify-center items-center'>
        <IoSearchOutline className='text-2xl text-zinc-300' />
        <input type="text" className='w-[40%] text-zinc-200 mx-3 border-none p-2 ' placeholder='Search Anything' />
        <IoCloseSharp className='text-2xl text-zinc-300'  />

    </div>
        <div className='w-[45%] rounded h-[50vh] absolute top-[6vw] bg-zinc-300 ml-[17%] overflow-auto'>
            <Link className='text-zinc-600 w-full font-semibold hover:text-black hover:bg-zinc-500 border-zinc-100 p-5 flex justify-start items-center border-b-2'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
            </Link>
            <Link className='text-zinc-600 w-full font-semibold hover:text-black hover:bg-zinc-500 border-zinc-100 p-5 flex justify-start items-center border-b-2'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
            </Link>
            <Link className='text-zinc-600 w-full font-semibold hover:text-black hover:bg-zinc-500 border-zinc-100 p-5 flex justify-start items-center border-b-2'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
            </Link>
            <Link className='text-zinc-600 w-full font-semibold hover:text-black hover:bg-zinc-500 border-zinc-100 p-5 flex justify-start items-center border-b-2'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
            </Link>
            <Link className='text-zinc-600 w-full font-semibold hover:text-black hover:bg-zinc-500 border-zinc-100 p-5 flex justify-start items-center border-b-2'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
            </Link>
            <Link className='text-zinc-600 w-full font-semibold hover:text-black hover:bg-zinc-500 border-zinc-100 p-5 flex justify-start items-center border-b-2'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
            </Link>
            <Link className='text-zinc-600 w-full font-semibold hover:text-black hover:bg-zinc-500 border-zinc-100 p-5 flex justify-start items-center border-b-2'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
            </Link>
            <Link className='text-zinc-600 w-full font-semibold hover:text-black hover:bg-zinc-500 border-zinc-100 p-5 flex justify-start items-center border-b-2'>
            <img src="" alt="" />
            <span>Hello Everyone</span>
            </Link>
        </div>
        </>
  )
}

export default Topnav