import React from 'react'
import Description from '../Description/Description'
import Logo from '../Logo/Logo'
import Target from '../Target/Target'
import './Registration.css'
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <>

            <section className='registrationSec'>

                <Logo />
                <Description />
                <Target />

                <div className="btnDiv">
                    <button className='btn btn-primary fbSignin'>Sign in with Facebook</button>

                    <button className='btn btn-primary twitterSignin'>Start with Twitter</button>

                    <button className='btn btn-primary gmailSignin'> Use Gmail</button>
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