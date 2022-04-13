import React from 'react'
import Description from '../../components/Description/Description'
import Logo from '../../components/Logo/Logo'
import Target from '../../components/Target/Target'
import './Registration.css'
import { Link } from 'react-router-dom';
import FbSignin from '../../components/FbSignin/FbSignin'
import TwitterSignin from '../../components/TwitterSignin/TwitterSignin'
import GmailSignin from '../../components/GmailSignin/GmailSignin'

const Registration = () => {
    return (
        <>

            <section className='authSec'>

                <Logo />
                <Description />
                <Target />

                <div className="btnDiv">
                    <FbSignin text='Sign in with Facebook' />
                    <TwitterSignin text='Start with Twitter' />
                    <GmailSignin text='Use Gmail' />
                </div>

                <div className="customLogin">
                    <Link className='signUp' to="/">Sign up</Link>
                    <p>with email and password</p>
                </div>

            </section>

        </>
    )
}

export default Registration