import React from 'react'
import './FbSignin.css'

const FbSignin = (props) => {
    return (
        <>
            <button className='btn btn-primary fbSignin authBtn'>{props.text}</button>
        </>
    )
}

export default FbSignin