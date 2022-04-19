import React from 'react'
import HomeFilterBtn from '../HomeFilterBtn/HomeFilterBtn'
import './HomeFilter.css'

const HomeFilter = () => {
    return (
        <>

            <div className="filterSec">
                <div className="filterDiv">
                    <button className='btn btn-danger'>Blocked</button>
                    <button className='btn btn-success'>+</button>
                    <HomeFilterBtn />
                    <HomeFilterBtn />
                    <HomeFilterBtn />
                    <HomeFilterBtn />
                    <HomeFilterBtn />
                    <HomeFilterBtn />
                    <HomeFilterBtn />
                </div>

                <div className="secondDiv">
                    <button className='btn btn-outilne-success'>+</button>
                    <HomeFilterBtn />
                    <HomeFilterBtn />
                    <HomeFilterBtn />
                    <HomeFilterBtn />
                    <HomeFilterBtn />
                    <HomeFilterBtn />
                    <HomeFilterBtn />
                    <HomeFilterBtn />

                </div>

            </div>

        </>
    )
}

export default HomeFilter