import React from 'react'
import deals from '../../assets/data/deals'

export default function HotDeals() {
    return (
        <div className='hot-deals'>
            <ul>
                {deals.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}
