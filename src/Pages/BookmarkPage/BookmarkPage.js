import React, { useState } from 'react'
import BoookMarkFilter from '../../components/BookmarkFilter/BoookMarkFilter'
import HomeFilter from '../../components/HomeFilter/HomeFilter'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import SocialPageCard from '../../components/SocialPageCard/SocialPageCard'
import './BookmarkPage.css'

const BookmarkPage = () => {

    const [filOpen, setFilopen] = useState(false);

    const handelFilopen = () => {
        var element = document.getElementsByTagName("body");
        element[0].classList.toggle("scrollFilOpen");
        setFilopen(!filOpen);
    }


    return (
        <>
            <div className={`SocialPage ${filOpen&&"scrollFilOpen"}`} >

                <div className="logoDiv container" onClick={filOpen&&handelFilopen} >
                    <Logo filopenFun={handelFilopen} filOpen={filOpen} />
                </div>

                <div className={`bookMarkFilter ${filOpen&&"open"}`} >
                    <BoookMarkFilter />
                </div>

                <div className={`filOverlay ${filOpen&&"open"}`}></div>




                <div className="addPost">
                    <button className='btn btn-primary addPostBtn '>ADD A NEW POST</button>
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


            <section className="navbarSecHome" onClick={filOpen&&handelFilopen}>
                <Navbar />
            </section>

        </>
    )
}

export default BookmarkPage