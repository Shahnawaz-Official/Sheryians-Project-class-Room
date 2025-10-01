import React from 'react'
import Product from './Product';

function Products() {
    const products = [
        {title:"Shahnawaz",disc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ullam, amet nobis ratione maiores ex, distinctio illum esse minima corporis possimus id sapiente voluptatibus tempora temporibus placeat consequatur veritatis velit?",live:true,case:false},
        {title:"Aditya",disc:"Doloremque, quod sapiente! Dolor laudantium at non ea incidunt architecto voluptate aut perspiciatis ratione vero illum, laboriosam numquam omnis voluptatibus.",live:true,case:false},
        {title:"inderjeet",disc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, corrupti! Assumenda vel minus quo ratione quis dolore, veritatis non aperiam aliquid ab! Odit sed explicabo saepe praesentium vitae fuga expedita.",live:true,case:true},
        {title:"kishan",disc:"Tempore, in nesciunt rem minus qui iure voluptates numquam maxime reiciendis veritatis at sed laborum, quis quo odit molestiae eligendi quaerat exercitationem! Quibusdam, vitae a!",live:true,case:true},
        {title:"Aman Kumar ",disc:"Nostrum explicabo fugiat, illo quidem ullam cum similique eum labore mollitia tempora placeat! Accusantium fuga qui quasi illo iure sint nemo impedit, distinctio libero cum cupiditate? Ad, quisquam.",live:true,case:true},
       
    ];
  return (
    <div>
      {products.map((val,index)=>{
        return <Product key={index} item={val} />
         
        
      })}
     
    </div>
  )
}

export default Products