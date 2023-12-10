import React from 'react'
import destination from '../../assets/data/destination'
import DesinationCard from '../DesinationCard'
import SectionTitle from '../SectionTitle'
import SmallSectionTitle from '../SmallSectionTitle'
import HotDeals from './HotDeals'
import './styles/popularDestinations.css'

export default function PopularDestinations() {
    return (
        <>
            <div className='section-margin padding-block-100'>
                <div className="ready-yet mg-block-00">
                    <SectionTitle header='Ready to travel?' />
                </div>

                <SmallSectionTitle classes='mg-top' title="Popular Trips" />
                <SectionTitle header='Our Most Popular Trips' />

                <HotDeals />

                <div className="destination-cards mg-block-100">
                    {destination.map(item => <DesinationCard key={item.id} {...item} />)}
                </div>
            </div>
        </>
    )
}
