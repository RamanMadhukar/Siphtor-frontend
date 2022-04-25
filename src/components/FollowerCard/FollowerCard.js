import { Avatar } from '@mui/material'
import { getThemeProps } from '@mui/system'
import React from 'react'
import './FollowerCard.css'

const FollowerCard = (props) => {
    return (
        <>

            <div className="followerCardDiv">
                <div className="socialAvatar">
                    <Avatar
                        alt="Remy Sharp"
                        src="	https://mui.com/static/images/avatar/1.jpg"
                        sx={{ width: 60, height: 60 }}
                    />
                </div>

                <div className="nameDiv">
                    <h5>{props.followerName}</h5>
                </div>

                <div className="followBTNDiv">
                    <button className='btn btn-primary followBtn'>FOLLOW</button>
                </div>
            </div>

        </>
    )
}

export default FollowerCard