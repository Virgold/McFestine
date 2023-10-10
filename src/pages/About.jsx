import React from 'react';
import AboutUs from '../components/about/AboutUs';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';

const About = () => {
    return (
        <div>
            <Navbar
                loginStyle='text-[white] bg-[#CF9832] border border-[white] rounded-full md:py-[12px] py-[5px] md:px-[17px] px-[6px]'
                signUpStyle='text-[#CF9832] bg-white border border-[white] shadow rounded-full md:py-[12px] py-[5px] md:px-[17px] px-[6px]'
            />
            <AboutUs />
            <Footer />
        </div>
    )
}

export default About