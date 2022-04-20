import React from 'react'
import './SocialPage.css'
import HomeFilter from '../../components/HomeFilter/HomeFilter'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import SocialPageCard from '../../components/SocialPageCard/SocialPageCard'
import FollowCard from '../../components/FollowCard/FollowCard'

const SocialPage = () => {
    return (
        <>

            <div className="SocialPage">
                <div className="logoDiv">
                    <Logo />
                </div>

                <div className="filterSec">
                    <HomeFilter />
                </div>

                <div className="addPost">
                    <button className='btn btn-primary addPostBtn '>ADD A NEW POST</button>
                </div>

                <div className="socialContent">
                    <SocialPageCard />
                </div>

                <div className="socialFollowDiv">
                    <FollowCard />
                    <FollowCard />
                    <FollowCard />
                    <FollowCard />
                    <FollowCard />
                    <FollowCard />
                    <FollowCard />

                </div>

                <div className="socialContent">
                    <SocialPageCard />
                    <SocialPageCard />
                    <SocialPageCard />
                    <SocialPageCard />
                    <SocialPageCard />
                    <SocialPageCard />
                    <SocialPageCard />
                </div>
            </div>


            <section className="navbarSecHome">
                <Navbar />
            </section>

        </>
    )
}

export default SocialPage