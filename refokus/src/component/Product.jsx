import React from 'react'
import Button from './Button'

function Product({item}) {
  return (
    <div className='w-full py-10 text-white'>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between '>
            <h1 className='text-6xl capitalize font-medium'>{item.title}</h1>
            <div className='flex flex-col gap-5 w-1/3'> 
                <p className='text-justify'>{item.disc}</p>
              <div className='flex gap-2'>
                 {item.live && <Button  />}
               {item.case && <Button title="Case Study" />}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Product