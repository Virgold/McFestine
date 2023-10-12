import React, { useEffect, useState } from 'react';
import logo from '../../assets/image 25.png';
import Button from './Button';
import { Link } from 'react-router-dom';


export const Navbar = ({ loginStyle, signUpStyle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(false);

  const navLinksStyle = `${menuOpen && 'hover:bg-[#e7bd3c8f] py-4 w-full rounded -m-'} hover:md:text-[#CF9832]`
  const navLinksUlWrapperStyle = `${menuOpen ? 'absolute top-0 w-[100%] right-0 rounded-b-2xl transition-all shadow-xl bg-[#FDFDFD]' : 'hidden'} gap-6 md:flex md:flex-row flex-col items-center justify-center text-center gap py-6 px-8 text-[#666666] uppercase font-semibold`

  // rgba(246,245,242,0.87)

  const toggleMenu = () => {
    setMenuOpen(menuOpen => !menuOpen);
  }

  const handleScreenWidth = () => {
    if (window.innerWidth > 767) {
      setMenuOpen(false)
    }
  }

  const handleScrollEffect = () => {
    if (window.scrollY > 100) {
      setNavHeight(true);
    } else {
      setNavHeight(false);
    }
  }
  // console.log(window);
  useEffect(() => {
    window.addEventListener('resize', handleScreenWidth)
    window.addEventListener('scroll', handleScrollEffect)
    return () => {
      window.removeEventListener('resize', handleScreenWidth)
      window.removeEventListener('scroll', handleScrollEffect)
    };
  }, []);

  return (

    <nav className={`transition-all md:py-6 py-4 md:px-15 sm:px-10 px-5 w-full z-10 
    // ${navHeight ? 'bg-[#FDFDFD] shadow fixed' : ''} 
    sm:bg-none`}>
      <div className='container mx-auto flex items-center justify-between relative'>

        <div className='flex items-center'>
         <Link to="/"> <img src={logo} alt="Logo" className='h-12 ' /></Link>
        </div>

        <ul className={`${navLinksUlWrapperStyle}`}>
          <Link to="/" className={`text-[#CF9832] ${navLinksStyle}`}><a href="#">Home</a></Link>
          <Link to="/store" className={navLinksStyle}><a href="#">Store</a></Link>
          <Link to="/about" className={navLinksStyle}><a href="#">About</a></Link>
          <Link to="/blog" className={navLinksStyle}><a href="#">Blog</a></Link>
          <Link to="/contact" className={navLinksStyle}><a href="#">Contact</a></Link>
        </ul>

        <div className='flex gap-4'>
          <div className='md:flex space-x-5 font-medium'>
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
