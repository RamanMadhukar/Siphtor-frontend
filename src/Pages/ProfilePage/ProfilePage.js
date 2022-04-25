import React from 'react'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import Profile from '../../components/Profile/Profile'
import './ProfilePage.css'

const ProfilePage = () => {
    return (
        <>

            <section className='profilePageSec'>

                <div className="logoDiv">
                    <Logo />
                </div>
                <div className="">
                    <Profile />
                </div>

                <section className="navbarSecHome">
                    <Navbar />
                </section>
            </section>

        </>
    )
}

export default ProfilePage