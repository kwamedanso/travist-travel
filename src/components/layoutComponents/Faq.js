import React, { useState } from 'react'
import SmallSectionTitle from '../SmallSectionTitle'
import SectionTitle from '../SectionTitle'
import faq from '../../assets/data/faq'
import { BsChevronDown } from 'react-icons/bs'
import './styles/faq.css'

export default function Faq() {
    const [activeFaq, setActiveFaq] = useState(1)

    function handleClick(id) {
        if (id === activeFaq) {
            setActiveFaq(0)
        } else {
            setActiveFaq(id)
        }
    }

    return (
        <div className='section-margin padding-block-500'>
            <SmallSectionTitle title={'FAQ'} />
            <SectionTitle
                header="Frequently Asked Questions"
                description="Frequently Asked Questions About the Travel Booking Process on Our Website: Answers to Common Concerns and Inquiries."
            />
            <div className="faqs">
                {faq.map(item => <div key={item.id} className='faq-item'>
                    <div className={`faq-question ${activeFaq === item.id && 'active'}`} onClick={() => handleClick(item.id)}>
                        <p className='fs-200'>{item.question}</p>
                        <BsChevronDown />
                    </div>

                    <div className={`faq-answer ${activeFaq === item.id && 'active'}`} onClick={() => handleClick(item.id)}><p className='fs-200 fs-op-200'>{item.answer}</p></div>
                </div>)}
            </div>

        </div>
    )
}
