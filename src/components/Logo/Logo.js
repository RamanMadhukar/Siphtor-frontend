import React from 'react'
import './Logo.css'

const Logo = () => {
    return (
        <>
            <div className="headDiv">

                <div className="filterIcon bookIcon">
                    <i class="fa-solid fa-filter"></i>
                </div>

                <h1>siphtor</h1>

                <div className="searchIcon bookIcon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

            </div>
        </>
    )
}

export default Logo