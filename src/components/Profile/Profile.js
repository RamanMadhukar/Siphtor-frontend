import { Avatar } from '@mui/material'
import React from 'react'
import './Profile.css'

const Profile = () => {
    return (
        <>

            <section className='profileSec'>
                <div className="profileDiv">
                    <div className="">
                        <div className="socialAvatar">
                            <Avatar
                                alt="Remy Sharp"
                                src="	https://mui.com/static/images/avatar/1.jpg"
                                sx={{ width: 100, height: 100 }}
                            />
                        </div>

                        <div className="proNameDiv">
                            <h2>Colin Selway</h2>
                        </div>
                    </div>

                    <div className="nextArrow">
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                </div>

                <div className="postDiv">

                    <div className="listWrraper">

                        <div className="listItem">
                            <div className="listIcon">
                                <i className="fa-solid fa-pencil"></i>
                            </div>
                            <div className="listName">
                                <h1>My posts</h1>
                            </div>
                        </div>

                        <div className="nextArrow">
                            <i className="fa-solid fa-angle-right"></i>
                        </div>

                    </div>

                    <div className="listWrraper">

                        <div className="listItem">
                            <div className="listIcon">
                                <i className="fa-solid fa-retweet"></i>
                            </div>
                            <div className="listName">
                                <h1>Reposts &</h1>
                            </div>
                        </div>
                        <div className="nextArrow">
                            <i className="fa-solid fa-angle-right"></i>

                        </div>
                    </div>


                </div>

                <div className="postDiv">

                    <div className="listWrraper">

                        <div className="listItem">
                            <div className="listIcon">
                                <i className="fa-solid fa-person-walking-arrow-right"></i>
                            </div>
                            <div className="listName">
                                <h1>Followers</h1>
                            </div>
                        </div>

                        <div className="nextArrow">
                            <i className="fa-solid fa-angle-right"></i>
                        </div>

                    </div>

                    <div className="listWrraper">

                        <div className="listItem">
                            <div className="listIcon">
                                <i className="fa-solid fa-person-walking-arrow-loop-left"></i>
                            </div>
                            <div className="listName">
                                <h1>Following</h1>
                            </div>
                        </div>
                        <div className="nextArrow">
                            <i className="fa-solid fa-angle-right"></i>

                        </div>
                    </div>


                </div>

                <div className="postDiv">

                    <div className="listWrraper">

                        <div className="listItem">
                            <div className="listIcon">
                                <i className="fa-solid fa-camera"></i>
                            </div>
                            <div className="listName">
                                <h1>Photo & Videos</h1>
                            </div>
                        </div>

                        <div className="nextArrow">
                            <i className="fa-solid fa-angle-right"></i>
                        </div>

                    </div>

                    <div className="listWrraper">

                        <div className="listItem">
                            <div className="listIcon">
                                <i className="fa-solid fa-chart-line"></i>
                            </div>
                            <div className="listName">
                                <h1>Analitics</h1>
                            </div>
                        </div>
                        <div className="nextArrow">
                            <i className="fa-solid fa-angle-right"></i>

                        </div>
                    </div>

                    <div className="listWrraper">

                        <div className="listItem">
                            <div className="listIcon">
                                <i className="fa-solid fa-gear"></i>
                            </div>
                            <div className="listName">
                                <h1>Setting</h1>
                            </div>
                        </div>
                        <div className="nextArrow">
                            <i className="fa-solid fa-angle-right"></i>

                        </div>
                    </div>


                </div>

            </section>

        </>
    )
}

export default Profile