import React from 'react'
import './SocialPageCard.css'
import { Avatar } from '@mui/material'

const SocialPageCard = () => {
    return (
        <>

            <section className='SocialPageCardSec'>
                <div className="mainDiv ">
                    <div className="row">

                        <div className="col-7 leftDiv">

                            <div className="SocialCardHead">

                                <div className="socialAvatar">
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="	https://mui.com/static/images/avatar/1.jpg"
                                        sx={{ width: 40, height: 40}}
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

        </>
    )
}

export default SocialPageCard