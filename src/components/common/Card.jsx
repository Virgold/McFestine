import React from 'react';
import Button from './Button';
import support_agent from '../../assets/support_agent.png'

const Card = () => {
    return (
        <div className='bg-[white] shadow-lg space-y-4 px-[20px] py-[32px]  max-w-[27rem] sm: min-w-[20rem] text-center rounded-[15px] scale-75'>
            <img src={support_agent} alt=""  className='mx-auto'/>
            <h1 className='text-[32px] px-6 font-semibold text-gray-700'>Talk to a member of our
                Sales team</h1>
            <p className='text-[20px] pb-4 text-gray-500'>We’ll help you find the right products and pricing for your business.</p>
            <Button
                text='Contact sales'
                styles={`text-[white] w-full text-[24px] bg-[#CF9832] border border-[#CF9832] rounded-full md:py-[12px] py-[5px] md:px-[17px] px-[6px]`}
            />
        </div>
    );
}

export default Card;
