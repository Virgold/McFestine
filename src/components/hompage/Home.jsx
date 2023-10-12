import React from 'react'
import { Navbar } from '../common/Navbar'
import { Footer } from '../common/Footer'
import ChooseUs from '../hompage/ChooseUs'
import Testimonial from '../hompage/Testimonial'
import Hero from './Hero'

const HomePage = () => {
    return (
        <div className="">
            <Hero/>
            <ChooseUs />
            <Testimonial />
        </div>
    )
}

export default HomePage
