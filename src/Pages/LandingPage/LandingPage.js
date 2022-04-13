import React from 'react'
import Description from '../../components/Description/Description'
import Logo from '../../components/Logo/Logo'
import Target from '../../components/Target/Target'
import './LandingPage.css'

const LandingPage = () => {
    return (
        <>
            <section className='authSec'>

                <Logo />

                <Description />

                <Target />

            </section>

        </>
    )
}

export default LandingPage