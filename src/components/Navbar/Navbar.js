import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <section className='navbarSec'>

                <ol >
                    <li className='wifiIcon '>
                        <i className="fa-solid fa-wifi"></i>
                    </li>

                    <li className='active'>
                        <i className="fa-solid fa-share-nodes"></i>
                    </li>

                    <li>
                        <i className="fa-solid fa-bookmark"></i>
                    </li>
                    <li>
                        <i className="fa-solid fa-user"></i>
                    </li>
                </ol>

            </section>
        </>
    )
}

export default Navbar