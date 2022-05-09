import React from 'react'
import Header from '../../components/Header/Header'
import './Analytics.css'
import { Chart } from "react-google-charts";


const Analytics = () => {

    const data = [
        ["Year", "Profit"],
        ["31.05", 40],
        ["30.05", 50],
        ["1.05", 30],
        ["2.05", 60],
        ["31.05", 40],
        ["30.05", 50],
        ["1.05", 30],
        ["2.05", 60]
    ];

    const options = {
        chart: {
            title: "Company Performance",
            subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
        colors: ["#99cb34"],


    };

    return (
        <>

            <div className="anatyticsPageSec">
                <Header />

                <div className="upperDiv">
                    <img src="/images/photo-1585409677983-0f6c41ca9c3b.jpg" alt="" width="100%" height="300px" />
                </div>
                <div className="analyticsBar">

                    <img src="https://mui.com/static/images/avatar/1.jpg" alt="" width="200px" height="200px" />

                    <ul>
                        <li>
                            <p>100</p>
                            <p>POST</p>
                        </li>
                        <li>
                            <p>100</p>
                            <p>REPOST</p>
                        </li>
                        <li>
                            <p>100</p>
                            <p>LIKES</p>
                        </li>
                        <li>
                            <p>100</p>
                            <p>BOOKMARKED</p>
                        </li>
                        <li>
                            <p>100</p>
                            <p>FOLLOWERS</p>
                        </li>
                        <li>
                            <p>100</p>
                            <p>FOLLOWING</p>
                        </li>
                        <li>
                            <p>100</p>
                            <p>PHOTO&VIDEOS</p>
                        </li>
                    </ul>

                </div>

                <div className="upperSectioinn ">

                    <div className="chartDiv ">

                        <Chart
                            chartType="Bar"
                            data={data}
                            options={options}
                            width="100%"
                            height="400px"
                        // legendToggle
                        />
                    </div>

                    <div className="summerySec ">

                        <div className="anaContentDiv anaContentDivActive">
                            <p className='upperText'>Nov 2015</p>
                            <p className='lowerText'>summary</p>
                        </div>

                        <div className="anaContentDiv">
                            <p className='upperText'>45</p>
                            <p className='lowerText'>SIPHTS</p>
                        </div>

                        <div className="anaContentDiv">
                            <p className='upperText'>68</p>
                            <p className='lowerText'>IMPRESSION</p>
                        </div>

                        <div className="anaContentDiv">
                            <p className='upperText'>Nov 2015</p>
                            <p className='lowerText'>summary</p>
                        </div>

                        <div className="anaContentDiv">
                            <p className='upperText'>45</p>
                            <p className='lowerText'>SIPHTS</p>
                        </div>

                        <div className="anaContentDiv">
                            <p className='upperText'>68</p>
                            <p className='lowerText'>IMPRESSION</p>
                        </div>

                    </div>


                </div>

                <div className="bottomDiv">
                    <div className="postDiv">
                        <div className="postHead">
                            <h4>Top Siphts</h4>
                        </div>
                        <div className="post">

                            <div className="detailedTitleDiv">

                            </div>



                            <div className="datetimeSec">
                                <div className="dateDiv">
                                    <p>February 12, 2017 at 11:18</p>
                                </div>
                                <div className="sourceDiv">
                                    <p>BBC UK</p>
                                </div>
                            </div>

                            <div className="desTitleDiv">
                                <h4>Sherlock creators discuss season 4 finale and the likelihood</h4>
                            </div>

                            <div className="likeDislikeDiv">
                                <div className="likeIcon">
                                    <i className="fa-solid fa-thumbs-up"></i>
                                    <p>15</p>
                                </div>

                                <div className="dislikeIcon">
                                    <i className="fa-solid fa-thumbs-down"></i>
                                    <p>3</p>
                                </div>

                                <div className="shareIcon">
                                    <i className="fa-solid fa-share-nodes"></i>
                                    <p>60</p>
                                </div>

                                <div className="chatIcon">
                                    <i className="fa-solid fa-message"></i>
                                    <p>0</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="postDiv">
                        <div className="postHead">
                            <h4>Top Siphts</h4>
                        </div>
                        <div className="post">

                            <div className="detailedTitleDiv">

                            </div>



                            <div className="datetimeSec">
                                <div className="dateDiv">
                                    <p>February 12, 2017 at 11:18</p>
                                </div>
                                <div className="sourceDiv">
                                    <p>BBC UK</p>
                                </div>
                            </div>

                            <div className="desTitleDiv">
                                <h4>Sherlock creators discuss season 4 finale and the likelihood</h4>
                            </div>

                            <div className="likeDislikeDiv">
                                <div className="likeIcon">
                                    <i className="fa-solid fa-thumbs-up"></i>
                                    <p>15</p>
                                </div>

                                <div className="dislikeIcon">
                                    <i className="fa-solid fa-thumbs-down"></i>
                                    <p>3</p>
                                </div>

                                <div className="shareIcon">
                                    <i className="fa-solid fa-share-nodes"></i>
                                    <p>60</p>
                                </div>

                                <div className="chatIcon">
                                    <i className="fa-solid fa-message"></i>
                                    <p>0</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="postDiv">
                        <div className="postHead">
                            <h4>Top Siphts</h4>
                        </div>
                        <div className="post">

                            <div className="detailedTitleDiv">

                            </div>



                            <div className="datetimeSec">
                                <div className="dateDiv">
                                    <p>February 12, 2017 at 11:18</p>
                                </div>
                                <div className="sourceDiv">
                                    <p>BBC UK</p>
                                </div>
                            </div>

                            <div className="desTitleDiv">
                                <h4>Sherlock creators discuss season 4 finale and the likelihood</h4>
                            </div>

                            <div className="likeDislikeDiv">
                                <div className="likeIcon">
                                    <i className="fa-solid fa-thumbs-up"></i>
                                    <p>15</p>
                                </div>

                                <div className="dislikeIcon">
                                    <i className="fa-solid fa-thumbs-down"></i>
                                    <p>3</p>
                                </div>

                                <div className="shareIcon">
                                    <i className="fa-solid fa-share-nodes"></i>
                                    <p>60</p>
                                </div>

                                <div className="chatIcon">
                                    <i className="fa-solid fa-message"></i>
                                    <p>0</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}

export default Analytics