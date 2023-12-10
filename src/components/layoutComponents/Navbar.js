import React from 'react'
import browserRoutes from '../../assets/data/browerRoutes'
import { NavLink } from 'react-router-dom'
import brandLogo from '../../assets/images/LOGO.png'
import './styles/navbar.css'

export default function Navbar() {
    return (
        <>
            <header className='section-margin'>
                <div className='header'>
                    <NavLink to={'/'}>
                        <img className='nav-logo' src={brandLogo} alt="" />
                    </NavLink>
                    <div className="hamburger">
                        <span className="bars"></span>
                        <span className="bars"></span>
                        <span className="bars"></span>
                    </div>

                    <nav className="nav-items">
                        <ul>
                            {browserRoutes.map((item) => <li key={item.id}><NavLink to={item.path}>{item.title}</NavLink></li>)}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
