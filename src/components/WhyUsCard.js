import React from 'react'

export default function WhyUsCard(props) {
    return (
        <div className='why-us-card'>
            {props.icon}
            <h3 className='fs-400 padding-block-100'>{props.title}</h3>
            <p className='fs-200 fs-op-200'>{props.description}</p>
        </div>
    )
}
