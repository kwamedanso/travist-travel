import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterItem(props) {
    return (
        <div className='footer-item padding-block-100'>
            <h3 className='fs-400 fw-semi-bold'>{props.title}</h3>
            <ul className='footer-links-list'>
                {/* <li><Link to={props.path}>{props.labelLink}</Link></li> */}
                {props.links.map(item => <li className='padding-block-1' key={item.label}><Link className='footer-links fs-200' to={item.labelpath}>{item.label}</Link></li>)}
                <div className='footer-socials'>
                    {props.socials?.map(item => <Link className='footer-social-icons' key={item.id} to={item.socialPath} target='_blank'>{item.socialIcon}</Link>)}
                </div>
            </ul>
        </div>
    )
}
