import React from 'react'

export default function StepsItem(props) {
    return (
        <div className="steps-list">
            <div className="step-list-item">
                {props.icon}
                <div className="step-description">
                    <h3 className='step-description-title fs-200 fs-op-200 fw-bold'>{props.title}</h3>
                    <p className='fs-200 fs-op-300'>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
