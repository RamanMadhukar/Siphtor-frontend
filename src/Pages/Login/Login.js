import React from 'react'
import { Link } from 'react-router-dom'
import Description from '../../components/Description/Description'
import FbSignin from '../../components/FbSignin/FbSignin'
import GmailSignin from '../../components/GmailSignin/GmailSignin'
import Logo from '../../components/Logo/Logo'
import Target from '../../components/Target/Target'
import TwitterSignin from '../../components/TwitterSignin/TwitterSignin'
import './Login.css'

const Login = () => {
    return (
        <>

            <section className='authSec'>

                <Logo />
                <Description />
                <Target />

                <div className="inputdiv">
                    <form className='loginForm' action="">
                        <input className='inputfield' type="text" placeholder='Username' />
                        <input className='inputfield' type="text" placeholder='Password' />
                        <button className='btn btn-primary loginBtn' >Log in</button>
                    </form>
                </div>

                <div >
                    <h3 className='or'>OR</h3>
                </div>

                <div className="loginBtnDiv">

                    <div className="btnwarper">
                        <FbSignin text="Facebook" />
                    </div>

                    <div className="btnwarper">
                        <TwitterSignin text="Twitter" />
                    </div>

                    <div className="btnwarper">
                        <GmailSignin text="Gmail" />
                    </div>
                </div>

                <div className="customLogin">
                    <Link className='signUp' to="/">Sign up</Link>
                    <p>with email and password</p>
                </div>

            </section>

        </>
    )
}

export default Login