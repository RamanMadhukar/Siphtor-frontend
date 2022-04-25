import React from 'react'
import Logo from '../../components/Logo/Logo'
import Navbar from '../../components/Navbar/Navbar'
import './Detailed.css'

const Detailed = () => {
    return (
        <>
            <div className="detiled">

                <div className="logoDiv">
                    <Logo />
                </div>

                <div className="detailedTitleDiv">

                    <div className="iconDiv">
                        <div className="starIcon">
                            <i className="fa-solid fa-star"></i>
                        </div>

                        <div className="cameraIcon">
                            <i className="fa-solid fa-camera"></i>
                        </div>
                    </div>

                    <div className="desTitleDiv">
                        <h4>Sherlock creators discuss season 4 finale and the likelihood</h4>
                    </div>

                </div>



                <div className="datetimeSec">
                    <div className="dateDiv">
                        <p>February 12, 2017 at 11:18</p>
                    </div>
                    <div className="sourceDiv">
                        <p>BBC UK</p>
                    </div>
                </div>

                <div className="articalSec">
                    <div className="shortArtical">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque venenatis scelerisque magna sit amet posuere.
                            Ut et fringilla dui, eget scelerisque purus.
                            Pellentesque id convallis nulla, sit amet porttitor ante.
                        </p>
                    </div>

                    <div className="longArtical">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis scelerisque magna sit amet posuere. Ut et fringilla dui, eget scelerisque purus. Pellentesque id convallis nulla, sit amet porttitor ante. Fusce congue purus enim, sit amet sodales felis ullamcorper in. Suspendisse imperdiet sapien pulvinar neque eleifend hendrerit. Nunc aliquet dui nisi, eget tincidunt mauris convallis nec. Praesent eu rutrum eros, ac ullamcorper purus. Integer quis egestas eros. Vestibulum at nisl ut nisi vulputate feugiat.

                            Curabitur congue nibh dolor, sit amet pretium tellus suscipit vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus purus tortor, vehicula id ultricies eu, rhoncus vitae dolor. Donec commodo malesuada placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at maximus orci, sit amet ultrices quam. Vestibulum molestie condimentum luctus.

                        </p>
                    </div>
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

            <section className="navbarSecHome">
                <Navbar />
            </section>

        </>
    )
}

export default Detailed