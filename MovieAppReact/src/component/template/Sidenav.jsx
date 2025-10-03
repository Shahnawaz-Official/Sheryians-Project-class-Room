import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
   return (
      <div className='w-[20%] text-zinc-300 border border-zinc-500 p-4'>
         <h1 className='text-center font-bold text-3xl '>Shahnawaz | Db</h1>
         <nav className=' flex flex-col '>
            <h1 className='font-bold text-2xl px-10 py-5 select-none '>News Feeds</h1>
            <Link className='w-ful hover:text-white hover:font-bold  transition-all duration-700  hover:text-2xl p-4 hover:rounded-lg hover:bg-[#6556CD]' to="/trending">Trending</Link>
            <Link className='w-ful hover:text-white  hover:font-bold transition-all duration-700  hover:text-2xl p-4 hover:rounded-lg hover:bg-[#6556CD]' to="/popular">Popular</Link>
            <Link className='w-ful hover:text-white  hover:font-bold transition-all duration-700  hover:text-2xl p-4 hover:rounded-lg hover:bg-[#6556CD]' to="/movies">Movies</Link>
            <Link className='w-ful hover:text-white  hover:font-bold transition-all duration-700  hover:text-2xl p-4 hover:rounded-lg hover:bg-[#6556CD]' to="/tv-shows">Tv Show</Link>
            <Link className='w-ful hover:text-white  hover:font-bold transition-all duration-700  hover:text-2xl p-4 hover:rounded-lg hover:bg-[#6556CD]' to="/people">People</Link>

            <hr className='h-[1px] bg-zinc-400 mt-10 ' />

            <h1 className='font-bold text-2xl px-4 py-5 select-none '>Website Information</h1>
            <Link className='w-ful hover:text-white hover:font-bold  transition-all duration-700  hover:text-2xl p-4 hover:rounded-lg hover:bg-[#6556CD]' to="/about">About</Link>
            <Link className='w-ful hover:text-white  hover:font-bold transition-all duration-700  hover:text-2xl p-4 hover:rounded-lg hover:bg-[#6556CD]' to="/contect">Contect Us</Link>

         </nav>
      </div>
   )
}

export default Sidenav
