import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import ContactUs from '../components/contact/ContactUs';

export const Contact = () => {
    return (
        <div className='bg-[#b3b3b31c] min-w-full min-h-screen overflow-x-hidden'>
            <Navbar
                loginStyle='text-[white] text-sm md:text-base bg-[#CF9832] border border-[#CF9832] rounded-full md:py-[12px] py-[5px] md:px-[17px] px-[6px]'
                signUpStyle='text-[#CF9832] text-sm md:text-base bg-white border border-[#CF9832] rounded-full md:py-[12px] py-[5px] md:px-[17px] px-[6px]'
            />
            <ContactUs/>
            <Footer />
        </div>
    )
}
