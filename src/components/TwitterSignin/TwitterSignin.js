import React from 'react'
import './TwitterSignin.css'

const TwitterSignin = (props) => {
    return (
        <>
            <button className='btn btn-primary twitterSignin authBtn'>{props.text}</button>
        </>
    )     
}

export default TwitterSignin