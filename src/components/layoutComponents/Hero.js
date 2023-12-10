import React from 'react'
import heroBackground from '../../assets/images/background-removebg-preview.png'
import { AiFillLinkedin, AiTwotoneHeart } from 'react-icons/ai'
import { BiLogoAirbnb } from 'react-icons/bi'
import { BsPaypal } from 'react-icons/bs'
import { SiTurkishairlines } from 'react-icons/si'
import Button from '../Button'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'
import './styles/hero.css'
import SmallSectionTitle from '../SmallSectionTitle'



export default function Hero() {
    return (
        <div className='section-margin padding-block-00'>
            <div className='hero'>
                <div className="hero-content">
                    <div>
                        <SmallSectionTitle title={'All you need is Adventure'} />
                        <h1 className='primary-header fs-900 fw-black'><span>Discover</span> the best <span>destinations</span> in the <span>world</span></h1>
                        <p className='fs-300 fs-op-300 padding-block-500'>Let's take vacation to get rid of boredom and make your day more colorful. Bright air awaits you for a vacation with your friends, lover and family.</p>
                        <Button label="Get Started" bg="white" radius={'7px'} textColor={'black'} mouseOver={'pink'} shadow={true} pad={'1rem'} icon={<MdKeyboardDoubleArrowRight />} />
                    </div>
                    <div className='trustees'>
                        <p className='fs-300'>Companies trust us</p>
                        <div className="trustees-icons">
                            <BsPaypal />
                            <AiFillLinkedin />
                            <BiLogoAirbnb />
                            <SiTurkishairlines />
                        </div>
                    </div>
                </div>

                <div className="hero-background-image flex jc-center ai-center">
                    <p className='hero-star-rating fs-300'><AiFillStar />5.0</p>
                    <div className='hero-short-description'>
                        <AiTwotoneHeart />
                        <div>
                            <p className='fs-100 fw-bold'>Very Friendly Service</p>
                            <p className='fs-100 fs-op-100'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?</p>
                        </div>
                    </div>
                    <a href='https://wa.me/233208001363' target='_blank' rel='noreferrer' className='connect-whatsapp fs-300'><span>Connect Here</span> <IoLogoWhatsapp /></a>
                    <img src={heroBackground} alt="hero-background" />
                </div>
            </div>

        </div>
    )
}
