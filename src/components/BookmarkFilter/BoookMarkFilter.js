import React from 'react'
import './BoookMarkFilter.css'

const BoookMarkFilter = () => {
    return (
        <>

            <section className='bookmarkFilterSec'>

                <div className='wrraperBookmarFil' >
                    <label className="containerBookmarkFil " for="filter1"> Most recent
                        <input type="checkbox" id="filter1" name="filter1" value="recent" />
                        <span className="checkmark"></span>
                    </label>

                    <label className="containerBookmarkFil" for="filter2"> Most popular
                        <input type="checkbox" id="filter2" name="filter2" value="popular" />
                        <span className="checkmark"></span>
                    </label>

                    <label className="containerBookmarkFil" for="filter3"> Mentioned
                        <input type="checkbox" id="filter3" name="filter3" value="mentioned" />
                        <span className="checkmark"></span>
                    </label>

                    <label className="containerBookmarkFil" for="filter4"> Reports
                        <input type="checkbox" id="filter4" name="filter4" value="reports" />
                        <span className="checkmark"></span>
                    </label>

                </div>

            </section>

        </>
    )
}

export default BoookMarkFilter