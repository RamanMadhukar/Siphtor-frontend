import React from 'react'
import './HomeCard.css'

const HomeCard = () => {
    return (
        <>

            <div className="homeCard">
                <div className="imgDiv">
                    <img className='cardImg' src="/images/download.jpg" alt="" height="200" width="100%"/>
                </div>
                <div className="sourceDiv">
                    NEW YORK TIMES
                </div>
                <div className="CardHead">
                    F.D.A Agress to New Trial for Ecstasy
                </div>
            </div>

        </>
    )
}

export default HomeCard