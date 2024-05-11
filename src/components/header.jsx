import React from 'react'

const Header = () => {
  return (
    <nav className='h-16 bg-outerHoney sticky top-0'>
        <div className='flex items-center justify-between w-full h-full px-5'>
            <div className='text-xl font-semibold'>Spelling <span className='text-centerHoney'>BEE</span></div>
            <div className='flex gap-4'>
                <button>EN</button>
                <button>TR</button>
            </div>
        </div>
    </nav>
  )
}

export default Header