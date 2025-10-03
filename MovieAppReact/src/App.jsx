import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'

function App() {
  return (
    <div className='h-screen w-screen bg-zinc-700 flex'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App