import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import './Header.css'
import Logo from '../Logo/Logo';

const Header = () => {
    return (
        <>
            <div className="header">
                <Logo />

                <div className="searchDiv">
                    <input type="text" placeholder='Find your friends' />
                    <button className='btn btn-primary searchbtn'><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <div className="notiDiv">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon color="action" />
                    </Badge>

                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon color="action" />
                    </Badge>
                </div>

                <div className="homeProfileDiv">

                    <div className="socialAvatar">
                        <Avatar
                            alt="Remy Sharp"
                            src="	https://mui.com/static/images/avatar/1.jpg"
                            sx={{ width: 60, height: 60 }}
                        />
                    </div>

                    <div className="proNameDiv">
                        <h2>Colin Selway</h2>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header