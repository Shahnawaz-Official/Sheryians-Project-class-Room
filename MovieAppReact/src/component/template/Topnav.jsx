import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Topnav() {

  const [query, setquery] = useState("")



  return (
    <>
      <div className='w-full h-[7vw] flex relative justify-center items-center'>
        <IoSearchOutline className='text-2xl text-zinc-300' />
        <input onChange={(e) => setquery(e.target.value)} value={query} type="text" className='w-[40%] outline-none  text-zinc-200 mx-3 border-none p-2 ' placeholder='Search Anything' />
        {query.length > 0 && (
          <IoCloseSharp
            onClick={() => setquery("")}
            className='text-xl text-zinc-300 cursor-pointer absolute left-[68%]'
          />
        )}


      </div>
      <div className='w-[35%] rounded max-h-[50vh] absolute top-[6vw] bg-zinc-400 ml-[22%] overflow-auto'>
        <Link className='text-zinc-200 w-full font-semibold hover:text-black hover:bg-zinc-300 border-zinc-200 p-5 flex justify-start items-center border-b-2'>
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link>
       
        
      
      </div>
    </>
  )
}

export default Topnav