import React from 'react'

export default function SmallSectionTitle({ title, classes }) {
    return (
        <>
            <p className={`small-section-title | fs-200 fw-bold ${classes}`} >{title}</p>

        </>

    )
}
