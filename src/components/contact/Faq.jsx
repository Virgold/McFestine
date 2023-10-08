import React, { useState } from 'react';
import dropdown_arrow from '../../assets/dropdown.svg'

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const items = [
        {
            title: 'Can I change my plan later?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, fugiat?',
        },
        {
            title: 'Can I change my plan later?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, fugiat?',
        },
        {
            title: 'What is your cancellation policy?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, fugiat?',
        },
        {
            title: 'What is your cancellation policy?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, fugiat?',
        },
        {
            title: 'Can other info be added to an invoice?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, fugiat?',
        },
        {
            title: 'Can other info be added to an invoice?',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, fugiat?',
        },
    ];

    return (
        <div className='w-full sm:w-[70%] mt-4 p-4 container mx-auto'>
            <div className='text-center'>
                <h1 className='font-bold text-[28px] sm:text-[32px]'>Frequently asked questions</h1>
                <p className=' sm:text-[19px] text-gray-500 mt-[22px] mb-[3rem]'>Everything you need to know about the product and billing.</p>
            </div>

            <div className="w-full">
                {items.map((item, index) => (
                    <div key={index} className="mb-1 transition-all">
                        <button
                            onClick={() => handleClick(index)}
                            className="w-full border-t-2 border-t-[#EAECF0] p-2 text-left font-semibold text-lg focus:outline-none relative text-[16px]">
                            <span> {item.title} </span>
                            <img src={dropdown_arrow} alt="" className='absolute right-5 top-0 bottom-0 m-auto scale-75' />
                        </button>

                        <div className={`${activeIndex === index ? 'block' : 'hidden'} px-3 pb-4 pt-2`} >
                            {item.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;
