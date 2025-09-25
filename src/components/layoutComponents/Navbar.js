// import React from 'react'
// import browserRoutes from '../../assets/data/browerRoutes'
// import { NavLink } from 'react-router-dom'
// import brandLogo from '../../assets/images/LOGO.png'
// import './styles/navbar.css'

// export default function Navbar() {
//     return (
//         <>
//             <header className='section-margin'>
//                 <div className='header'>
//                     <NavLink to={'/'}>
//                         <img className='nav-logo' src={brandLogo} alt="" />
//                     </NavLink>
//                     <div className="hamburger">
//                         <span className="bars"></span>
//                         <span className="bars"></span>
//                         <span className="bars"></span>
//                     </div>

//                     <nav className="nav-items">
//                         <ul>
//                             {browserRoutes.map((item) => <li key={item.id}><NavLink to={item.path}>{item.title}</NavLink></li>)}
//                         </ul>
//                     </nav>
//                 </div>
//             </header>
//         </>
//     )
// }

import React, { useState } from 'react'
import browserRoutes from '../../assets/data/browerRoutes'
import { NavLink } from 'react-router-dom'
import brandLogo from '../../assets/images/LOGO.png'
import './styles/navbar.css'

export default function Navbar() {
    const [toggleHamburger, setToggleHamburger] = useState(false)

    const handleToggle = () => {
        setToggleHamburger(!toggleHamburger)
    }

    const closeMenu = () => {
        setToggleHamburger(false)
    }

    return (
        <>
            <header className='section-margin'>
                <div className='header'>
                    <NavLink to={'/'} onClick={closeMenu}>
                        <img className='nav-logo' src={brandLogo} alt="Brand Logo" />
                    </NavLink>

                    <div
                        className={`hamburger ${toggleHamburger ? 'active' : ''}`}
                        onClick={handleToggle}
                    >
                        <span className="bars"></span>
                        <span className="bars"></span>
                        <span className="bars"></span>
                    </div>

                    <nav className={`nav-items ${toggleHamburger ? 'show' : ''}`}>
                        <ul>
                            {browserRoutes.map((item) => (
                                <li key={item.id}>
                                    <NavLink
                                        to={item.path}
                                        onClick={closeMenu}
                                    >
                                        {item.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Mobile overlay */}
                {toggleHamburger && (
                    <div
                        className="mobile-overlay"
                        onClick={closeMenu}
                    ></div>
                )}
            </header>
        </>
    )
}