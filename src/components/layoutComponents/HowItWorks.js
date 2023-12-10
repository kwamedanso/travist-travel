import React from 'react'
import steps from '../../assets/data/howItWorks'
import StepsItem from '../StepsItem'
import howItWorks from '../../assets/images/how-it-works.png'
import SmallSectionTitle from '../SmallSectionTitle'
import SectionTitle from '../SectionTitle'
import './styles/howItWorks.css'

export default function HowItWorks() {
    return (
        <>
            <div id='how-it-works' className='section-margin padding-block-100'>
                <SmallSectionTitle title="Fast & Easy" />
                <SectionTitle header='Get Your Favourite Resourt Bookings' />
                <div className='how-it-works-grid'>
                    <div className="how-it-works-title">
                        <div className="book-trip">
                            <h2 className="fs-600">Book Your Next Trip In 3 Easy Steps</h2>
                        </div>
                        <div className="book-trip-steps padding-block-300">
                            {steps.map(item => <StepsItem key={item.id} title={item.title} description={item.description} icon={item.icon} />)}
                        </div>
                    </div>
                    <img className='how-it-works-img' src={howItWorks} alt="" />
                </div>
            </div>
        </>
    )
}
