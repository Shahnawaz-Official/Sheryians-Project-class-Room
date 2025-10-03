import React from 'react'

function Sidenav() {
  return (
     <div className='w-[20%] text-zinc-400 border-1 border-zinc-500 p-4'>
        <h1 className='text-center font-bold text-3xl'>Shahnawaz | Db</h1>
        <nav className=' flex flex-col gap-3'>
            <h1 className='font-bold text-2xl px-10 py-5 '>News Feeds</h1>
            <Link>Trending</Link>
            <Link>Populer</Link>
            <Link>Movies</Link>
            <Link>Tv Show</Link>
            <Link>People</Link>
        </nav>

     </div>
  )
}

export default Sidenav