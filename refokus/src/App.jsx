import React from 'react'
import Navbar from './component/Navbar'
import Work from './component/Work'
import Stripes from './component/Stripes'
import Products from './component/Products'

function App() {
  return (
 <div className='w-full h-full bg-black text-white'>
  <Navbar />
  <Work />
  <Stripes />
  <Products />
 </div>
  )
}

export default App