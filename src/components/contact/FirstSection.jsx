import React from 'react';
import contactImg1 from '../../assets/unsplash_kufY1HyGEO8.jpg'
import contactImg2 from '../../assets/Group 34.png'
import contactImg3 from '../../assets/shopping_cart.png'
import Card from '../common/Card';

const FirstSection = () => {
    return (
        <div className='pt-[1rem]  w-full relative lg:container mx-auto'>

            <div className='flex flex-row justify-between'>
                <div className='pt-4 lg:min-w-[50%] w-full mx-auto px-8 lg:ps-12 lg:pe-4'>
                    <h1 className='text-[40px] md:text-[50px] lg:text-[60px] font-semibold'>Contact us</h1>
                    <p className='text-[19px] text-gray-500 mt-[32px] mb-[16px]'>“If there’s one thing we love it’s convey your thought to our diversely skilled team for the best results”</p>
                    <p className='text-[22px] italic text-gray-500'>- Chuks Maani</p>
                </div>


                <div className='w-auto lg:contents hidden'>
                    <img src={contactImg1} alt="" className='rounded' />
                </div>
            </div >

            <div className='mx-auto flex flex-col lg:flex-row justify-center items-center lg:absolute top-[43%] lg:ps-10'>
                <div className='flex flex-col md:flex-row sm:flex-nowrap flex-wrap lg:-space-x-[4rem]  items-center w-full justify-center'>
                    <Card />
                    <div className=' -mt-12 sm:m-0'>
                        <Card />
                    </div>
                </div>
                <div>
                    <div className='flex lg:flex-col gap-5 lg:mt-[8rem]'>

                        <img src={contactImg2} alt="contactImg2" className='scale-[80%] md:scale-[100%]' />
                        <div className='flex items-center justify-center bg-[white] w-[80px] h-[80px] rounded-full shadow-lg scale-[80%] md:scale-[100%]'>
                            <img src={contactImg3} alt="contactImg3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FirstSection;
