import React from 'react'

function Navbar() {
  return (
    <div className='max-w-screen-xl py-6 mx-auto bg-zinc-800 '>
        <h1>shahnawaz</h1>
        <div className="links">
            {["Home" , "Work", 'Culture'].map((item)=><a>{item}</a>)}
        </div>
        </div>
  )
}

export default Navbar