import React, { useState } from 'react'

export default function Button({ label, icon, bg, textColor, radius, shadow, pad }) {
    const [isHovering, setisHovering] = useState(false);

    function handleMouseOver() {
        setisHovering(true)
    }

    function handleMouseOut() {
        setisHovering(false)
    }

    return (
        <>
            <button
                className='button'
                style={{ backgroundColor: `${bg}`, padding: `${pad}`, color: `${textColor}`, borderRadius: `${radius}`, border: `${isHovering ? '1px solid var(--light-blue)' : ''}`, boxShadow: shadow ? '0 2px 5px rgba(0,0,0,.15)' : '' }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}>
                {label} {icon ? icon : null}
            </button>

        </>

    )
}
