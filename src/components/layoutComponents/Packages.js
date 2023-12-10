import React from 'react'
import packages from '../../assets/data/packages'
import PackageItem from '../PackageItem'
import SectionTitle from '../SectionTitle'
import SmallSectionTitle from '../SmallSectionTitle'
import './styles/packages.css'

export default function Packages() {
    return (
        <>
            <div className="section-margin packages padding-block-700">
                <SmallSectionTitle title="Our Pricing" />

                <SectionTitle header='Simple pricing, for everyone' description='Flexible offers, adapted to your needs' />

                <div className="packages-grid">
                    {packages.map(item => <PackageItem key={item.id} {...item} />)}
                </div>
            </div>
        </>
    )
}
