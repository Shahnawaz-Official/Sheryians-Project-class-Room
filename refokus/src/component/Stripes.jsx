import React from 'react'
import Stripe from './Stripe'


function Stripes() {
    const data = [
        {url:"https://images.unsplash.com/photo-1562783912-21ad31ee2a83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",number:48},
        {url:"https://plus.unsplash.com/premium_photo-1673326679548-962d2fe77423?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",number:2},
        {url:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",number:11},
        {url:"https://images.unsplash.com/photo-1529612700005-e35377bf1415?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",number:48},
        {url:"https://plus.unsplash.com/premium_photo-1667354097023-4b8d9c3f7767?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbXBhbnklMjBsb2dvfGVufDB8fDB8fHww",number:2},
        {url:"https://images.unsplash.com/photo-1562705121-e624542c7b9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXBhbnklMjBsb2dvfGVufDB8fDB8fHww",number:11},
        {url:"https://images.unsplash.com/photo-1551263640-1c007852f616?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXBhbnklMjBsb2dvfGVufDB8fDB8fHww",number:48},
        
    ];
  return (
    <div className='flex items-center'>
    {data.map((item,index)=>{
       return <Stripe val={item} key={index}/>
    })}
    </div>
  )
}

export default Stripes