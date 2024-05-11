import React from 'react'
import LanguageSwitcher from './languageSwitcher'

const Header = () => {
  return (
    <nav className='h-16 bg-outerHoney sticky top-0 opacity-90'>
        <div className='flex items-center justify-between w-full h-full px-5'>
            <div className='text-xl font-semibold'>Spelling <span className='text-centerHoney'>BEE</span></div>
            <div className='flex gap-4'>
                <LanguageSwitcher/>
            </div>
        </div>
    </nav>
  )
}

export default Header