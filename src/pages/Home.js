import React from 'react'
import GetStarted from '../components/layoutComponents/GetStarted'
import Testimonial from '../components/layoutComponents/Testimonial'
import Packages from '../components/layoutComponents/Packages'
import HowItWorks from '../components/layoutComponents/HowItWorks'
import PopularDestinations from '../components/layoutComponents/PopularDestinations'
import WhyUseUs from '../components/layoutComponents/WhyUseUs'
import Hero from '../components/layoutComponents/Hero'
import Faq from '../components/layoutComponents/Faq'

export default function Home() {
    return (
        <div className='home'>
            <Hero />
            <PopularDestinations />
            <HowItWorks />
            <Packages />
            <WhyUseUs />
            <Testimonial />
            <Faq />
            <GetStarted />
        </div>
    )
}
