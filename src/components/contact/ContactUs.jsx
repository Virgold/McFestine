import React from 'react';
import { Navbar } from '../common/Navbar';

const ContactUs = () => {
    return (
        <div>
            <Navbar
                loginStyle='text-[#CF9832] text-sm md:text-base bg-white border border-[#CF9832] rounded-full md:py-[12px] py-[5px] md:px-[17px] px-[6px]'
                signUpStyle='text-[white] text-sm md:text-base bg-[#CF9832] border border-[#CF9832] rounded-full md:py-[12px] py-[5px] md:px-[17px] px-[6px]'
            />
        </div>
    );
}

export default ContactUs;