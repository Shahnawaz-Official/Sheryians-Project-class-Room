import React from 'react'
import Button from './Button'
function Navbar() {
  return (
    <div className='max-w-screen-xl  py-6 mx-auto flex items-center justify-between border-b-[2px] border-zinc-700  '>
     <div className='flex  gap-40'>
       <h1 className='text-3xl ml-20'>Shahnawaz</h1>
      <div className="links flex gap-10">
        {["Home", "Work", 'Culture',"","News"].map((item,index) =>( 
          item.length === 0 ? <span className='h-6 w-0.5 bg-zinc-600'></span>:<a className='flex items-center gap-2 text-sm' href='#'>
         {index === 1 ? (<span   style={{boxShadow:" 0 0 0.45em #00FF19"}} className='inline-block w-2 h-2 rounded-full  bg-green-600'></span>):null} 
          {item}</a>
        ))}
          
      </div> 
     </div>
     <Button />
    </div>
  )
}

export default Navbar