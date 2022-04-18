import React from 'react'
import HomeCard from '../../components/HomeCard/HomeCard'
import './Home.css'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import HomeFilterBtn from '../../components/HomeFilterBtn/HomeFilterBtn'

const Home = () => {
    return (
        <>

            <div className="home">

                <div className="logoDiv">
                    <Logo />
                </div>

                <div className="topSec">

                    {/* <div className="filterDiv">
                        <button className='btn btn-danger'>Blocked</button>
                        <button className='btn btn-success'>+</button>
                        <HomeFilterBtn />
                    </div> */}



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