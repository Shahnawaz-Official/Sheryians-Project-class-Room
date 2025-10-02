import React, { useState } from 'react'
import Product from './Product';
import { motion } from "framer-motion"

function Products() {
  
    const products = [
        {title:"Shahnawaz",disc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ullam, amet nobis ratione maiores ex, distinctio illum esse minima corporis possimus id sapiente voluptatibus tempora temporibus placeat consequatur veritatis velit?",live:true,case:false},
        {title:"Aditya",disc:"Doloremque, quod sapiente! Dolor laudantium at non ea incidunt architecto voluptate aut perspiciatis ratione vero illum, laboriosam numquam omnis voluptatibus.",live:true,case:false},
        {title:"inderjeet",disc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, corrupti! Assumenda vel minus quo ratione quis dolore, veritatis non aperiam aliquid ab! Odit sed explicabo saepe praesentium vitae fuga expedita.",live:true,case:true},
        {title:"kishan",disc:"Tempore, in nesciunt rem minus qui iure voluptates numquam maxime reiciendis veritatis at sed laborum, quis quo odit molestiae eligendi quaerat exercitationem! Quibusdam, vitae a!",live:true,case:true},
        {title:"Aman Kumar ",disc:"Nostrum explicabo fugiat, illo quidem ullam cum similique eum labore mollitia tempora placeat! Accusantium fuga qui quasi illo iure sint nemo impedit, distinctio libero cum cupiditate? Ad, quisquam.",live:true,case:true},
       
    ];
     const [pos , setpos] = useState(0)
     const mover = (val)=>{
      setpos(val*23)
     }

  return (
    <div className='mt-45 relative'>
      {products.map((val,index)=> <Product mover={mover} index={index} key={index} item={val} />)}
      <div className='h-full w-full absolute top-0 pointer-events-none '>
        <motion.div initial={{y:pos , x:"-50%"}} animate={{y:pos +"rem"}}  className='absolute w-[26rem] rounded-2xl h-[23rem] left-[46%] bg-sky-400 overflow-hidden '>
          <div className='w-full h-full bg-sky-100'></div>
          <div className='w-full h-full bg-sky-200'></div>
          <div className='w-full h-full bg-sky-300'></div>
          <div className='w-full h-full bg-sky-400'></div>
          <div className='w-full h-full bg-sky-500'></div>
        </motion.div>
      </div>
     
    </div>
  )
}

export default Products