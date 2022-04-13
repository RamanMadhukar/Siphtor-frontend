import React from 'react'
import './GmailSignin.css'

const GmailSignin = (props) => {
    return (
        <>
            <button className='btn btn-primary gmailSignin authBtn'>{props.text}</button>

        </>
    )
}

export default GmailSignin