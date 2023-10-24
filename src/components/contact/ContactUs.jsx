import React from 'react';
import { Navbar } from '../common/Navbar';
import Faq from './Faq';
import Form from './Form';
import FirstSection from './FirstSection';
import email from '../../assets/images/mail.png'
import location from '../../assets/images/location_on.png'
import phone from '../../assets/images/call.png'
import map from '../../assets/images/Rectangle.png'
import { Footer } from '../common/Footer';

const ContactUs = () => {
    return (
        <div className='bg-[#b3b3b31c] min-w-full min-h-screen overflow-x-hidden'>
            <Navbar
                loginStyle='text-[white] text-sm md:text-base bg-[#CF9832] border border-[#CF9832] rounded-full md:py-[12px] py-[5px] md:px-[17px] px-[6px]'
                signUpStyle='text-[#CF9832] text-sm md:text-base bg-white border border-[#CF9832] rounded-full md:py-[12px] py-[5px] md:px-[17px] px-[6px]'
            />
            <FirstSection />
            <Faq />
            <Form />

            <div className='my-[5rem] flex flex-row flex-wrap justify-center md:justify-between '>
                <div className='bg-[white] cursor-pointer shadow-lg space-y-4 px-[20px] pt-[32px] pb-[50px] w-[100%] sm:w-[50%] md:w-[33%] text-center rounded-[15px] scale-75'>
                    <img src={email} alt="" className='mx-auto mb-4' />
                    <a href="mailto:mcfestines@gmail.com" className='text-[20px] pb-4 text-gray-500'>mcfestines@gmail.com</a>
                </div>
                <div className='bg-[white] cursor-pointer shadow-lg space-y-4 px-[20px] pt-[32px] pb-[50px] w-[100%] sm:w-[50%] md:w-[33%] text-center rounded-[15px] scale-75'>
                    <img src={location} alt="" className='mx-auto mb-4' />
                    <a href="http://" className='text-[20px] pb-4 text-gray-500'>Gaadi Layout, Coca Cola Bus Stop, Km 5 Gboko Road, Makurdi</a>
                </div>
                <div className='bg-[white] cursor-pointer shadow-lg space-y-4 px-[20px] pt-[32px] pb-[50px] w-[100%] sm:w-[50%] md:w-[33%] text-center rounded-[15px] scale-75'>
                    <img src={phone} alt="" className='mx-auto mb-4' />
                    <a href="tel:+234 901 246 2195" className='text-[20px] pb-4 text-gray-500'>+234 901 246 2195</a>
                </div>
            </div>

            <div className='flex justify-center items-center mb-[19rem]'>
                <img src={map} alt="" className='w-[95%] md:w-[90%]' />
            </div>

            <Footer />

        </div>
    );
}

export default ContactUs;