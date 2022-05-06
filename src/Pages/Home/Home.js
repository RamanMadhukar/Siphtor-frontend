import React from 'react'
import HomeCard from '../../components/HomeCard/HomeCard'
import './Home.css'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import HomeFilter from '../../components/HomeFilter/HomeFilter'
import Header from '../../components/Header/Header'
// import SocialPage from '../SocialPage/SocialPage'

const Home = () => {
    return (
        <>

            <div className="home">


                <div className="logoDiv">
                    <Logo />
                </div>

                <Header />

                <div className="contanier">
                    <div className="row">
                        <div className="col-md-7">
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
                        {/* <div className="col-md-5">
                            <SocialPage/>
                        </div> */}
                    </div>
                </div>



            </div>
            <section className="navbarSecHome">
                <Navbar />
            </section>
        </>
    )
}

export default Home