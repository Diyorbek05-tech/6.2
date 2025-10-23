import React from 'react'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
     <>
        <nav className='flex justify-between items-center p-4 w-[60%]'>
          <div className='flex gap-8'>
            <a className='text-[16px] hover:text-blue-700 text-black' href="#">Wooden Furniture</a>
            <a className='text-[16px] hover:text-blue-700 text-black' href="#">About</a>
            <a className='text-[16px] hover:text-blue-700 text-black' href="#">Stories</a>
          </div>
          <div><img src={logo} alt="logo" /></div>
        </nav>
        <hr style={{opacity: '0.1'}}/>
        </>
  )
}

export default Header