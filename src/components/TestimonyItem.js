import React from 'react'

export default function TestimonyItem(props) {
    return (
        <div className='testimony-item'>
            <h3 className='fs-200 fw-bold'>"{props.title}"</h3>
            <p className='fs-100 fs-op-300 padding-block-100'>{props.description}</p>
            <div className="testimony-item-customer-info">
                <img className='testimony-item-img' src={props.image} alt={props.customerName} />
                <div className="testimony-item-customer-info-details">
                    <p className='fs-200'>{props.customerName}</p>
                    <p className='fs-100 fs-op-300'>{props.occupation}</p>
                </div>
            </div>
        </div>
    )
}
