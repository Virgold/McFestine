import React, { useEffect, useState } from 'react';
import logo from '../../assets/image 25.png';
import Button from './Button';

export const Navbar = ({ loginStyle, signUpStyle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinksStyle = `${menuOpen && 'hover:bg-[#e7bd3c8f] py-4 w-full rounded -m-'} hover:md:text-[#CF9832]`
  const navLinksUlWrapperStyle = `${menuOpen ? 'absolute top-16 w-[100%] right-0 rounded-b-2xl transition-all bg-[rgba(231,188,60,0.33)]' : 'hidden'} gap-6 md:flex md:flex-row flex-col items-center justify-center text-center gap py-6 px-8 text-[#666666] uppercase font-semibold`

  const toggleMenu = () => {
    setMenuOpen(menuOpen => !menuOpen);
  }

  const handleScreenWidth = () => {
    if (window.innerWidth > 767) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleScreenWidth)
    return () => {
      window.removeEventListener('resize', handleScreenWidth)

    };
  }, []);

  return (
    <nav className='md:py-6 py-4 md:px-15 sm:px-10 px-5 bg-[#ffffff] shadow-md fixed w-full z-10'>
      <div className='container mx-auto flex items-center justify-between relative'>

        <div className='flex items-center'>
          <img src={logo} alt="Logo" className='h-12 ' />
        </div>

        <ul className={navLinksUlWrapperStyle}>
          <li className={`text-[#CF9832] ${navLinksStyle}`}><a href="#">Home</a></li>
          <li className={navLinksStyle}><a href="#">Store</a></li>
          <li className={navLinksStyle}><a href="#">About</a></li>
          <li className={navLinksStyle}><a href="#">Blog</a></li>
          <li className={navLinksStyle}><a href="#">Contact</a></li>
        </ul>

        <div className='flex gap-4'>
          <div className='md:flex space-x-5 font-medium '>
            <Button
              text='Login'
              styles={loginStyle}
            />
            <Button
              text='Sign up'
              styles={signUpStyle}
            />
          </div>

          <button
            onClick={toggleMenu}
            className='md:hidden hover:text-[#CF9832] text-[#CF9832] focus:outline-none'
            aria-label={`${menuOpen ? 'Close' : 'Open'} Menu`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
          
        </div>

      </div>
    </nav>
  );
};
