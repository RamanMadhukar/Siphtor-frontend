import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import FollowerCard from '../../components/FollowerCard/FollowerCard'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import './FollowingPage.css'

const FollowingPage = () => {

    const [alignment, setAlignment] = React.useState('web');

    const handleToggleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <>
            <div className="followersPageSec">

                <div className="logoDiv">
                    <Logo />
                </div>

                <div className="toggle">
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                    onChange={handleToggleChange}
                    >
                        <ToggleButton value="web">ORGANIZATION</ToggleButton>
                        <ToggleButton value="android">INDIVIDUAL</ToggleButton>
                    </ToggleButtonGroup>
                </div>

                <div className="followersPageDiv">
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                    <FollowerCard followerName="Rebecca Morelle" />
                </div>
            </div>

            <section className="navbarSecHome">
                <Navbar />
            </section>

        </>
    )
}

export default FollowingPage