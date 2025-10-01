import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto flex gap-4 mt-20'>
        <Card width="w-[30%]" start={false} para={true} heading={"Project &  Case Study"} mainheading={"Potfolio"} />

        
        <Card width="w-[70%]" start={true} para={false} />
      </div>
    </div>
  )
}

export default Cards
