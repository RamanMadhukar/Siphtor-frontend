import React from 'react'
import FollowCard from '../../components/FollowCard/FollowCard'
import FollowerCard from '../../components/FollowerCard/FollowerCard'
import Header from '../../components/Header/Header'
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

                <Header />

                <div className="upperDiv">
                    <img src="/images/photo-1585409677983-0f6c41ca9c3b.jpg" alt="" width="100%" height="300px" />
                </div>
                <div className="analyticsBar">

                    <img src="https://mui.com/static/images/avatar/1.jpg" alt="" width="200px" height="200px" />

                    <ul>
                        <li>
                            <p>100</p>
                            <p>POST</p>
                        </li>
                        <li>
                            <p>100</p>
                            <p>REPOST</p>
                        </li>
                        <li>
                            <p>100</p>
                            <p>LIKES</p>
                        </li>
                        <li>
                            <p>100</p>
                            <p>BOOKMARKED</p>
                        </li>
                        <li>
                            <p>100</p>
                            <p>FOLLOWERS</p>
                        </li>
                        <li>
                            <p>100</p>
                            <p>FOLLOWING</p>
                        </li>
                        <li>
                            <p>100</p>
                            <p>PHOTO&VIDEOS</p>
                        </li>
                    </ul>

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

                <div className="followingCard">
                    <FollowCard />
                    <FollowCard />
                    <FollowCard />
                    <FollowCard />
                    <FollowCard />
                    <FollowCard />
                    <FollowCard />
                    <FollowCard />
                </div>

            </div>

            <section className="navbarSecHome">
                <Navbar />
            </section>
        </>
    )
}

export default FollowersPage