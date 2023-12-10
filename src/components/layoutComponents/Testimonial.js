import React from 'react'
import testimonial from '../../assets/data/testimonial'
import TestimonyItem from '../TestimonyItem'
import SectionTitle from '../SectionTitle'
import '../layoutComponents/styles/testimonial.css'
import SmallSectionTitle from '../SmallSectionTitle'

export default function Testimonial(props) {

    return (
        <>
            <div className="testimonial section-margin">
                <SmallSectionTitle title='Our Testimonials' />

                <SectionTitle header={<>What our <span>Happy Customers</span> say</>} description='This is what some clients said to us after having worked with us' />

                <div className="testimonies">
                    {testimonial.map((item) => <TestimonyItem key={item.id} title={item.title} description={item.description} image={item.image} customerName={item.customerName} occupation={item.occupation} />)}
                </div>

            </div>
        </>
    )
}
