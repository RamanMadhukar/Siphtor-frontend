import { Radio, Switch } from '@mui/material'
import React from 'react'
import Header from '../../components/Header/Header'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import './Setting.css'
import { Link } from 'react-router-dom'

const Setting = () => {


    return (
        <>

            <div className="setttingDiv">

                <div className="logoDiv">
                    <Logo />
                </div>

                <Header />

                <div className="settingWebView container">

                    <div className="row">

                        <div className="col-4 settingNavDiv">

                            <div className="navigationDiv">

                                <div className="navlistItem settingNavActive">

                                    <div className="navlistIcon">
                                        <i className="fa-solid fa-user"></i>
                                    </div>

                                    <div className="navlistHead">
                                        <h5>Profile</h5>
                                    </div>

                                </div>

                                <div className="navlistItem ">

                                    <div className="navlistIcon">
                                        <i className="fa-solid fa-gear"></i>
                                    </div>

                                    <div className="navlistHead">
                                        <h5>Setting</h5>
                                    </div>

                                </div>

                                <div className="navlistItem">

                                    <div className="navlistIcon">
                                        <i className="fa-solid fa-bell"></i>
                                    </div>

                                    <div className="navlistHead">
                                        <h5>E-mail Notifications</h5>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-8 settingMainDiv">

                            <div className="profileDiv">

                                <div className="proDivhead">
                                    <h5>Profile</h5>
                                </div>

                                <div className="photoUloadDiv">

                                    <div className="proUploadDiv">

                                        <div className="proPreview">

                                        </div>
                                        <i className="fa-solid fa-plus addBTN"></i>
                                        <div className="uploadBtnDiv">
                                            <button className='btn btn-primary'>UPLOAD PROFILE PHOTO</button>
                                        </div>
                                    </div>

                                    <div className="proUploadDiv">

                                        <div className="proPreview">

                                        </div>
                                        <i className="fa-solid fa-plus addBTN"></i>
                                        <div className="uploadBtnDiv">
                                            <button className='btn btn-primary'>UPLOAD COVER PHOTO</button>
                                        </div>
                                    </div>

                                </div>

                                <div className="proDivhead">
                                    <h5>Name/Username</h5>
                                </div>

                                <div className="formDiv">
                                    <div className="updateDiv">
                                        <label htmlFor="">Name</label>
                                        <input type="text" />
                                    </div>
                                    <div className="updateDiv">
                                        <label htmlFor="">Username</label>
                                        <input type="text" />
                                    </div>
                                </div>

                                <div className="proDivhead">
                                    <h5>Social info and linking</h5>
                                </div>

                                <div className="girdDiv">
                                    <div className="contentDiv">
                                        <div className="containerDiv">
                                            <p>About you</p>
                                            <i className="fa-solid fa-plus"></i>
                                        </div>

                                        <div className="containerDiv">
                                            <p>Location</p>
                                            <i className="fa-solid fa-plus"></i>
                                        </div>

                                        <div className="containerDiv">
                                            <p>Website</p>
                                            <i className="fa-solid fa-plus"></i>
                                        </div>

                                        <div className="containerDiv">
                                            <p>Twitter</p>
                                            <i className="fa-solid fa-plus"></i>
                                        </div>

                                        <div className="containerDiv">
                                            <p>Other social media</p>
                                            <i className="fa-solid fa-plus"></i>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="profileDiv">

                                <div className="proDivhead">
                                    <h5>Setting</h5>
                                </div>

                                <div className="settingDiv">
                                    <div className="formDiv">
                                        <div className="updateDiv">
                                            <label htmlFor="">Name</label>
                                            <input type="text" />
                                        </div>
                                        <div className="updateDiv">
                                            <label htmlFor="">Username</label>
                                            <input type="text" />
                                        </div>
                                        <div className="updateDiv">
                                            <label htmlFor="">Forget Password</label>
                                            <Link to="/"> <a href="/">Change your password</a> </Link>
                                        </div>
                                    </div>

                                    <div className="smallHead">
                                        Gender
                                    </div>

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Radio
                                                    // checked={selectedValue === 'a'}
                                                    // onChange={handleChange}
                                                    value="a"
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                    // {...controlProps('a')} size="small"
                                                    sx={{
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 15,
                                                        },
                                                        color: "green",
                                                        '&.Mui-checked': {
                                                            color: "green",
                                                        },

                                                    }}
                                                />
                                            </div>
                                            <div className="listName">
                                                <h6>male</h6>
                                            </div>
                                        </div>

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Radio
                                                    // checked={selectedValue === 'a'}
                                                    // onChange={handleChange}
                                                    value="b"
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                    sx={{
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 15,
                                                        },
                                                        color: "green",
                                                        '&.Mui-checked': {
                                                            color: "green",
                                                        },

                                                    }}
                                                />
                                            </div>
                                            <div className="listName">
                                                <h6>female</h6>
                                            </div>
                                        </div>

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Radio
                                                    // checked={selectedValue === 'a'}
                                                    // onChange={handleChange}
                                                    value="b"
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                    sx={{
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 15,
                                                        },
                                                        color: "green",
                                                        '&.Mui-checked': {
                                                            color: "green",
                                                        },

                                                    }}
                                                />
                                            </div>
                                            <div className="listName">
                                                <h6>Custom</h6>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="smallHead">
                                        Privacy
                                    </div>

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h6>Search privacy</h6>
                                            </div>
                                        </div>

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h6>Store contacts</h6>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="smallHead">
                                        Personalisation
                                    </div>

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h6>Use sites you visit</h6>
                                            </div>
                                        </div>

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h6>Use partern info</h6>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="smallHead">
                                        Social networks
                                    </div>

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h6>Facebook</h6>
                                            </div>
                                        </div>

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h6>Twitter</h6>
                                            </div>
                                        </div>

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h6>Instagram</h6>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="profileDiv">

                                <div className="proDivhead">
                                    <h5>Email notifications</h5>
                                </div>

                                <div className="settingDiv">


                                    <div className="smallHead">
                                        Privacy
                                    </div>

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h6>Get e-mail notifications</h6>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="smallHead">
                                        Get an Email when someone
                                    </div>

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h6>Save your post</h6>
                                            </div>
                                        </div>

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h6>Likes your post</h6>
                                            </div>
                                        </div>

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h6>Follows you</h6>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="smallHead">
                                        Send e-mails
                                    </div>

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Radio
                                                    // checked={selectedValue === 'a'}
                                                    // onChange={handleChange}
                                                    value="a"
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                    // {...controlProps('a')} size="small"
                                                    sx={{
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 15,
                                                        },
                                                        color: "green",
                                                        '&.Mui-checked': {
                                                            color: "green",
                                                        },

                                                    }}
                                                />
                                            </div>
                                            <div className="listName">
                                                <h6>Daily</h6>
                                            </div>
                                        </div>

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Radio
                                                    // checked={selectedValue === 'a'}
                                                    // onChange={handleChange}
                                                    value="b"
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                    sx={{
                                                        '& .MuiSvgIcon-root': {
                                                            fontSize: 15,
                                                        },
                                                        color: "green",
                                                        '&.Mui-checked': {
                                                            color: "green",
                                                        },

                                                    }}
                                                />
                                            </div>
                                            <div className="listName">
                                                <h6>Immedialtely</h6>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>



                        <div className="mobileview">

                            <div className="settingHead">
                                <h3>Profile</h3>
                            </div>

                            <div className="uploadDiv">
                                <div className="postDiv">

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <i className="fa-solid fa-upload"></i>
                                            </div>
                                            <div className="listName">
                                                <h1>Upload profile photo</h1>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <i className="fa-solid fa-upload"></i>
                                            </div>
                                            <div className="listName">
                                                <h1>Upload cover photo</h1>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="nameDiv">
                                <div className="postDiv">

                                    <div className="listWrraper">

                                        <div className="listItem">

                                            <div className="listName">
                                                <h1>Name</h1>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="listWrraper">

                                        <div className="listItem">

                                            <div className="listName">
                                                <h1>Username</h1>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="settingHead">
                                <h3>Setting</h3>
                            </div>

                            <div className="nameDiv">
                                <div className="postDiv">

                                    <div className="listWrraper">
                                        <div className="listItem">
                                            <div className="listName">
                                                <h1>Email</h1>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="listWrraper">
                                        <div className="listItem">
                                            <div className="listName">
                                                <h1>Country</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="listWrraper">
                                        <div className="listItem">
                                            <div className="listName">
                                                <h1>Password</h1>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="listWrraper">
                                        <div className="listItem">
                                            <div className="listName">
                                                <h1>Gender</h1>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="privacyDiv toogleDivs">

                                <div className="postDiv">

                                    <h1>Privacy</h1>
                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h1>Search privacy</h1>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h1>Store contacts</h1>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="personalisationDiv toogleDivs">

                                <div className="postDiv">

                                    <h1>Personalisation</h1>
                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h1>Use site you visit</h1>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h1>Use pattern info</h1>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="socialNDiv toogleDivs">

                                <div className="postDiv">

                                    <h1>Social networks</h1>
                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h1>Facebook</h1>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h1>Twitter</h1>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h1>Instagram</h1>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="settingHead">
                                <h3>Email notifications</h3>
                            </div>

                            <div className="getEmaildiv1 toogleDivs">

                                <div className="postDiv">

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h1>Get e-mail notifications</h1>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="getEmaildiv2 toogleDivs">

                                <div className="postDiv">

                                    <h1>Get an Email when Someone</h1>
                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h1>Saves your posts</h1>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h1>Likes your posts</h1>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Switch
                                                    // checked={checked}
                                                    // onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />                           </div>
                                            <div className="listName">
                                                <h1>Follows you</h1>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="getEmaildiv3 toogleDivs">

                                <div className="postDiv">

                                    <h1>Send e-mails</h1>
                                    <div className="listWrraper">

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Radio
                                                    // checked={selectedValue === 'a'}
                                                    // onChange={handleChange}
                                                    value="a"
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                />                          </div>
                                            <div className="listName">
                                                <h1>Daily</h1>
                                            </div>
                                        </div>

                                        <div className="listItem">
                                            <div className="listIcon">
                                                <Radio
                                                    // checked={selectedValue === 'a'}
                                                    // onChange={handleChange}
                                                    value="b"
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': 'A' }}
                                                />                          </div>
                                            <div className="listName">
                                                <h1>Immediately</h1>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </div>


                        </div>
                    </div>

                </div>




            </div>

            <section className="navbarSecHome">
                <Navbar />
            </section>

        </>
    )
}

export default Setting