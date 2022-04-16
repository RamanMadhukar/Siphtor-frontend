import React from 'react'
import HomeCard from '../../components/HomeCard/HomeCard'
import './Home.css'
import Logo from '../../components/Logo/Logo'

const Home = () => {
    return (
        <>

            <div className="home">

                <div className="logoDiv">
                    <Logo />
                </div>

                <div className="news">
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                </div>

            </div>
        </>
    )
}

export default Home