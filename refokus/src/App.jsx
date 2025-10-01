import React from 'react'
import Navbar from './component/Navbar'
import Work from './component/Work'
import Stripes from './component/Stripes'
import Products from './component/Products'
import Marquees from './component/Marquees'
import Cards from './component/Cards'
import Fouter from './component/Fouter'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const scroll = new LocomotiveScroll();
  return (
 <div className='w-full h-full bg-black text-white'>
  <Navbar />
  <Work />
  <Stripes />
  <Products />
  <Marquees />
  <Cards />
  <Fouter/>
 </div>
  )
}

export default App