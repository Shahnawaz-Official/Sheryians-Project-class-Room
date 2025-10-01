import React from 'react'
import Button from './Button'

function Fouter() {
  return (
    <>
    
<div className='w-full'>
    <div className='max-w-screen-xl mx-auto  flex'>
        <div className='leftdiv w-1/2 '>
            <h1 className='text-[7vw] font-bold ml-15'>Shahnawaz</h1>
            <div className='flex gap-2 justify-center text-zinc-500 font-medium '>
                <h3>Privecy Policy</h3>
                <h3>CooKie Policy</h3>
                <h3>Impressive</h3>
                <h3>Tearm</h3>
            </div>
        </div>
        <div className='rightdiv flex gap-10 '>
            <div className=''>
                <h1 className='text-[10vw] ml-5 flex bottom-[90%] font-bold'>.</h1>
            </div>
            <div className='flex flex-col gap-3 mt-10'>
                <h3>Instagram</h3>
                <h3>Linkedin</h3>
                <h3>Socials</h3>
                <h3>Twitter</h3>
            </div>
            <div className='flex flex-col gap-3 mt-10'>
                <h3>Home</h3>
                <h3>Work</h3>
                <h3>Contect</h3>
            </div>
            <div className='flex flex-col gap-3 mt-10'>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
               <button className='px-4 py-2 w-fit ml-40 bg-blue-500 text-white rounded-4xl'>Enterprices Partner</button>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Fouter