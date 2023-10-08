import React from 'react';
import Button from '../common/Button';

const Form = () => {
    return (
        <div className='sm:w-[90%] mx-auto my-10 rounded-[2rem] bg-[#FDFDFD] pt-[3rem] px-[3rem] flex flex-col items-center '>

            <div className='text-center'>
                <p className=' sm:text-[25px] font-semibold mb-6'>Still got questions?</p>
                <h1 className='font-bold text-[28px] sm:text-[32px]'>Drop Us a Message For Any Query</h1>
            </div>

            <div className='mt-[2rem] md:mt-[5rem] flex flex-wrap justify-between gap-y-10'>
                <label className='flex flex-col gap-3 w-[100%] md:w-[49%]'>
                    <span className='text-[#666666] text-[18px]'>First name</span>
                    <input type="text" className='py-3 md:py-5 px-5 rounded-full text-[19px]  border border-[#B3B3B3] bg-transparent outline-none' placeholder='Enter your first name' />
                </label>
                <label className='flex flex-col gap-3 w-[100%] md:w-[49%]'>
                    <span className='text-[#666666] text-[18px]'>Last name</span>
                    <input type="text" className='py-3 md:py-5 px-5 rounded-full text-[19px]  border border-[#B3B3B3] bg-transparent outline-none' placeholder='Enter you last name' />
                </label>
                <label className='flex flex-col gap-3 w-[100%] md:w-[49%]'>
                    <span className='text-[#666666] text-[18px]'>Email address</span>
                    <input type="text" className='py-3 md:py-5 px-5 rounded-full text-[19px] border border-[#B3B3B3] bg-transparent outline-none' placeholder='youremail@gmail.com' />
                </label>
                <label className='flex flex-col gap-3 w-[100%] md:w-[49%]'>
                    <span className='text-[#666666] text-[18px]'>Phone number</span>
                    <input type="text" className='py-3 md:py-5 px-5 rounded-full text-[19px] border border-[#B3B3B3] bg-transparent outline-none' placeholder='+234-000-000-0000' />
                </label>
                <label className='flex flex-col gap-3 w-full'>
                    <span className='text-[#666666] text-[18px]'>Your Message</span>
                    <textarea className='py-3 md:py-5 px-5 rounded-[1.5rem] text-[19px] border border-[#B3B3B3] bg-transparent outline-none w-[100%] h-[255px]' placeholder='Enter your message here...' name="" id=""></textarea>
                </label>
            </div>
            <Button
                text='Send message'
                styles={`text-[white] md:me-auto text-[19px] bg-[#CF9832] border border-[#CF9832] rounded-full py-[16px] px-[32px] mt-[3rem] mb-[71px]`}
            />
        </div>
    );
}

export default Form;
