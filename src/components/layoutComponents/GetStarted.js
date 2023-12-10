import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import './styles/getStarted.css'
import { useNavigate } from 'react-router-dom'

export default function GetStarted() {
    const navigate = useNavigate();

    return (
        <div className="section-padding">
            <div className='get-started'>
                <h2 className='fs-600 fw-black'>Prepare yourself & let's explore the beauty of the world</h2>
                <p className='fs-300 padding-block-100 fw-bold'>We have many special especially for you</p>
                <button onClick={() => navigate('/pricing')} className='button' style={{ borderRadius: '10px' }}>
                    Get Started <MdKeyboardDoubleArrowRight />
                </button>
            </div>
        </div>
    )
}
