import React from 'react'
import packages from '../assets/data/packages'
import PackageItem from '../components/PackageItem'
import SectionTitle from '../components/SectionTitle'
import { Link } from 'react-router-dom'
import { BsCheckAll } from 'react-icons/bs'
import '../../src/components/layoutComponents/styles/pricing.css'

export default function Pricing() {
    return (
        <>
            <div className="pricing section-margin">
                <SectionTitle header={'Ready to get started?'} description={'Choose a plan tailored to your needs'} />

                <div className="packages-grid">
                    {packages.map(item => <PackageItem key={item.id} {...item} />)}
                </div>

                <div className="customize-packages padding-block-200">
                    <div>
                        <p className='fs-300 fw-bold'>Customize</p>
                        <p className='fs-100'>For individuals with specific needs</p>
                    </div>
                    <div>
                        <ul>
                            <li className='fs-100'><BsCheckAll /> Flat price for unlimited selections</li>
                            <li className='fs-100'><BsCheckAll /> Lorem ipsum dolor sit amet consectetur.</li>
                        </ul>
                    </div>
                    <div>
                        <Link className='button' to={'tel:233208001363'}>Contact Sales</Link>
                    </div>
                </div>

            </div>

        </>
    )
}
