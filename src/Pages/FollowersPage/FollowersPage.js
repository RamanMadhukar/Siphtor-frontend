import React from 'react'
import FollowerCard from '../../components/FollowerCard/FollowerCard'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import './FollowersPage.css'

const FollowersPage = () => {
    return (
        <>
            <div className="followersPageSec">

                <div className="logoDiv">
                    <Logo />
                </div>

                <div className="followersPageDiv">
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                </div>
            </div>

            <section className="navbarSecHome">
                <Navbar />
            </section>
        </>
    )
}

export default FollowersPage