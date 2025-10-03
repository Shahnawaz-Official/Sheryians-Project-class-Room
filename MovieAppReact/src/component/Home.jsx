import React from 'react'
import Sidenav from './template/Sidenav'

function Home() {
    document.title ="MoviAPP | HomePage"
  return (
    <>
    <Sidenav />
    <div className='w-[80%] '></div>
    </>
  )
}

export default Home