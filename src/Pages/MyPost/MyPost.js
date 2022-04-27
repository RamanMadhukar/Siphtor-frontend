import { Avatar } from '@mui/material'
import React from 'react'
import HomeFilter from '../../components/HomeFilter/HomeFilter'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import SocialPageCard from '../../components/SocialPageCard/SocialPageCard'
import './MyPost.css'

const MyPost = () => {
    return (
        <>
            <div className="myPost">
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

                <div className="myPostNews">
                    <div className="socialContent">

                        <SocialPageCard />

                    </div>
                </div>



                <div className="sharedPost">

                    <div className="socialContent">


                        <section className='SocialPageCardSec'>
                            <div className="mainDiv ">
                                <div className="row">

                                    <div className="col-7 leftDiv">

                                        <div className="sharedProfile">
                                            <div className="SocialCardHead">

                                                <div className="socialAvatar">
                                                    <Avatar
                                                        alt="Remy Sharp"
                                                        src="	https://mui.com/static/images/avatar/1.jpg"
                                                        sx={{ width: 40, height: 40 }}
                                                    />
                                                </div>

                                                <div className="postHeadDiv">
                                                    <div className="nameDiv">
                                                        <h5>Colin Selway</h5>
                                                    </div>
                                                    <div className="sharedLink">
                                                        <p>shared <strong>link</strong></p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="SocialCardHead">

                                            <div className="socialAvatar">
                                                <Avatar
                                                    alt="Remy Sharp"
                                                    src="	https://mui.com/static/images/avatar/1.jpg"
                                                    sx={{ width: 40, height: 40 }}
                                                />
                                            </div>

                                            <div className="postHeadDiv">
                                                <div className="nameDiv">
                                                    <h5>Colin Selway</h5>
                                                </div>
                                                <div className="date">
                                                    <p>February 12, 2017 at 11:18</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="postContent">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry...

                                            </p>
                                        </div>

                                    </div>

                                    <div className="col-5 imgSec">
                                        <img src="/images/download.jpg " alt="" width="100%" height="100%" />
                                    </div>

                                </div>



                            </div>
                        </section>
                    </div>
                </div>



            </div>



            <section className="navbarSecHome">
                <Navbar />
            </section>

        </>
    )
}

export default MyPost