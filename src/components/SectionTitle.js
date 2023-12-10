import React from 'react'

export default function SectionTitle(props) {

    return (
        <>
            <div className="section-title">
                <h2 className="fs-650 padding-block-1">{props.header}</h2>
                <p className="fs-200 fs-op-300 padding-block-100">{props.description}</p>
            </div>
        </>
    )
}
