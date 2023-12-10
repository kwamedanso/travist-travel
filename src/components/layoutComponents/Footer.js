import React from 'react'
import footer from '../../assets/data/footer'
import FooterItem from '../FooterItem'
import './styles/footer.css'
// import { Link, NavLink } from 'react-router-dom';

export default function Footer() {

    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer>
                <div className="footer-grid-items">
                    <div className="footer-org-info">
                        <p className='footer-title fw-black'>Travist Travel</p>
                        <p className='footer-description fs-400 padding-block-100'>We always make our customers happy by providing as many choices as possible. </p>
                    </div>
                    <div className="footer-links-grid">
                        {footer.map(item => <FooterItem key={item.id} title={item.title} links={item.links} socials={item.socials} />)}
                    </div>

                </div>
                <hr />
                <div className="footer-bottom-copyright">
                    <p className='footer-copyrith fs-200 fs-op-100'>&#169; {currentYear} Travist Travel, All rights reserved</p>
                </div>
            </footer>
        </>
    )
}




