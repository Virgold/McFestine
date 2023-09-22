import React, { useEffect, useState } from 'react'
import logo from '../../assets/image 25.png'
import Button from './Button'

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => { setToggle(toggle => !toggle) }

  return (
    <div className='py-6 flex items-center justify-around space-y-3 bg-[#ffffff] shadow'>
      <img src={logo} alt="" />
      <ul className='flex space-x-5 uppercase text-[#666666] font-semibold'>
        <li className='text-[#CF9832]'><a href="">Home</a></li>
        <li><a href="">Store</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contact</a></li>
      </ul>

      <div>
        <div className='flex space-x-5 font-medium'>
          <Button
            text='Login'
            styles='text-[white] border shadow border-[white] rounded-full py-[16px] px-[32px]'
          />
          <Button
            text='Sign up'
            styles='text-[#CF9832] bg-white border border-[white] rounded-full py-[16px] px-[32px]'
          />
        </div>
        {/* <p className='px-[6px] cursor-pointer flex-wrap
         rounded bg-[#188754] text-white text-extrabold md:hidde' onClick={handleToggle}>
          {toggle ? 'close'
            : 'open'}
        </p> */}
      </div>

    </div>
  )
}
