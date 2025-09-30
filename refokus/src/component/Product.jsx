import React from 'react'
import Button from './Button'

function Product() {
  return (
    <div className='w-full py-10 text-white'>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between '>
            <h1 className='text-6xl capitalize font-semibold'>arqitel</h1>
            <div className='flex flex-col w-1/3 bg-amber-400'>
                <div className=' desc '>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor possimus, tenetur doloribus quia molestias magni est magnam!</p>
            </div>
                <Button />
            </div>
        </div>
    </div>
  )
}

export default Product