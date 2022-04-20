import React from 'react'
import './FollowCard.css'
import { Avatar } from '@mui/material'

const FollowCard = () => {
    return (
        <>

            <section className='followCard' >
                <div className="followDiv">
                    <div className="followTopDiv">
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
                                    <p>@rowlet</p>
                                </div>
                            </div>

                        </div>
                        <div className="profession">
                            <p>IT Project Manager</p>
                        </div>

                    </div>
                    <div className="container followerDiv">
                        <div className="row">
                            <div className="col follower">
                                <h5>15m</h5>
                                <p>Followers</p>
                            </div>
                            <div className="col following">
                                <h5>247</h5>
                                <p>Following</p>
                            </div>
                        </div>
                    </div>
                    <div className="followBtnDiv">
                        <button className='btn btn-primary followBtn'>Follow</button>
                    </div>
                </div>
            </section>


        </>
    )
}

export default FollowCard