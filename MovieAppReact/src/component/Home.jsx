import React from 'react'
import Sidenav from './template/Sidenav'
import Topnav from './template/Topnav'

function Home() {
    document.title ="MoviAPP | HomePage"
  return (
    <>
    <Sidenav />
    <div className='w-[80%] '>
      <Topnav />
    </div>
    </>
  )
}

export default Home