import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] mt-20  flex  justify-between items-center px-5 py-5 border-t-[1px] border-b-[1px] border-r-[1px] rounded border-zinc-700'>
        
            <img className='h-10 rounded-md' src={val.url} alt="" />
        
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe