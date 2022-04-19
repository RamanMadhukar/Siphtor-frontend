import React from 'react'
import HomeCard from '../../components/HomeCard/HomeCard'
import './Home.css'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import HomeFilter from '../../components/HomeFilter/HomeFilter'

const Home = () => {
    return (
        <>

            <div className="home">

                <div className="logoDiv">
                    <Logo />
                </div>

                <div className="filterSec">
                    <HomeFilter />
                </div>

                <div className="news">
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                    <HomeCard />
                </div>

            </div>
            <section className="navbarSecHome">
                <Navbar />
            </section>
        </>
    )
}

export default Home