import React from 'react'
import SectionTitle from '../SectionTitle'
import whyUseUs from '../../assets/data/whyuseus'
import WhyUsCard from '../WhyUsCard'
import SmallSectionTitle from '../SmallSectionTitle'
import './styles/whyuseus.css'

export default function WhyUseUs() {
    return (
        <div className='section-margin'>
            <SmallSectionTitle title="Our Advantages" />

            <SectionTitle
                header='What are our advantages compared to others'
                description='You are guaranteed to get the best service from us. We make sure you are satisfied.' />

            <div className="why-use-us-grid padding-block-100">
                {whyUseUs.map(item => <WhyUsCard key={item.id} icon={item.icon} title={item.title} description={item.description} />)}
            </div>
        </div>
    )
}
