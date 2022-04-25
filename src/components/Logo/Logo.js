import React from 'react'
import './Logo.css'

const Logo = (props) => {
    return (
        <>
            <div className="headDiv row">

                <div className="filterIcon bookIcon col" onClick={props.filopenFun} style={{color:props.filOpen&&'#99cb34'}}>
                    <i className="fa-solid fa-filter"></i>
                </div>

                <h1 className='col'>siphtor</h1>

                <div className="searchIcon bookIcon col">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

            </div>
        </>
    )
}

export default Logo