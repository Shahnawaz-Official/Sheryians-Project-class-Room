import React from 'react'

function Work() {
    let images = [
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/6867e5af4ce59d080b9ebf42_branding-big.webp" , top:"50%" , left:"50%" , isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9.webp" , top:"42%" , left:"48%" , isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10.webp" , top:"52%" , left:"43%" , isActive:false},
        {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb122fb3c4a2a89a21ed_1.webp" , top:"55%" , left:"45%" , isActive:false},
        {url:"https://images.pexels.com/photos/14972530/pexels-photo-14972530.jpeg" , top:"55%" , left:"43%" , isActive:false},
        {url:"https://images.pexels.com/photos/17792899/pexels-photo-17792899.jpeg" , top:"49%" , left:"53%" , isActive:false},
    ];


  return (
    <div className='w-full '>
        <div className='relative max-w-screen-xl mx-auto text-center'>
            <h1 className='text-[30vw] font-normal select-none leading-none tracking-tight'>Work</h1>
            <div className='absolute w-full h-full top-0 '> 
              {images.map((item,index)=>(item.isActive &&(<img className=" absolute w-40 rounded-lg" src={item.url} style={{top:item.top ,left:item.left}}/>)
              ))}
            </div>
        </div>
    </div>
  )
}

export default Work