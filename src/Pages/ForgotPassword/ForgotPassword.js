import React from 'react'
import './ForgotPassword.css'
import Description from '../../components/Description/Description'
import Logo from '../../components/Logo/Logo'
import Target from '../../components/Target/Target'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <>
            <section className='authSec'>
                <Logo />
                <Description />
                <Target />


                <div className="fPasswordHead">
                    <h1>Forget your password?</h1>
                </div>

                <div className="fPasswordDes">
                    <p>
                        Enter your email below to recive your <br />
                        password reset instructions
                    </p>
                </div>


                <div className="inputdiv">
                    <form className='loginForm' action="">
                        <input className='inputfield' type="Email" placeholder='Email' />
                        <button className='btn btn-primary loginBtn' >Sign up</button>
                    </form>
                </div>

                <div className="loginLink">
                    <p>Go back to <Link className='login' to="/">Log in</Link></p>
                </div>



            </section>
        </>
    )
}

export default ForgotPassword