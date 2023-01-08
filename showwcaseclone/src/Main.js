import "./Main.css";

function Main(){
    return(
        <main className="main">
            <div className="container">
                <div className="content">

                </div>
                <div className="container-sidebar">
                    <div className="intro">
                        <img src="./profilePic.jpg" alt="pic" />
                        <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h4 className="name">Suraj Ambekar</h4></a>
                        <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h5 className="u-name">@surajambekar</h5></a>
                        {/* <h4 className="name">Suraj Ambekar</h4>
                        <h5 className="u-name">@surajambekar</h5> */}
                        <p className="para">I am a MERN Stack Developer and I love to code.</p>
                    </div>
                    <div className="tags">
                        <h3>Tags</h3>
                        <div className="tags-name">
                            <span className="tag-name">letslearntogether</span>
                            <span className="tag-name">mern</span>
                            <span className="tag-name">365daysofcontent</span>
                            <span className="tag-name">css</span>
                            <span className="tag-name">flexbox</span>
                            {/* <span className="tag-name"></span> */}
                        </div>
                    </div>
                    <div className="more-shows">
                        <h3 className="p">More on Showwcase</h3>
                        <div className="shows">
                            <a className="a" href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer">
                                <div className="show">
                                    <img src="./profilePic.jpg" alt="pic" />
                                    <div className="show-details">
                                        <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h2>Suraj Ambekar</h2></a>
                                        <h3>How to Become a Front-End Developer?</h3>
                                        <div className="views">
                                            <div className="i"><i class="fa-solid fa-newspaper"></i></div><span>268 views</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="a" href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><div className="show">
                                <img src="./profilePic.jpg" alt="pic" />
                                <div className="show-details">
                                    <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h2>Suraj Ambekar</h2></a>
                                    <h3>12 Steps You Need To Take Before Deploying Your Website</h3>
                                    <div className="views">
                                        <div className="i"><i class="fa-solid fa-newspaper"></i></div><span>268 views</span>
                                    </div>
                                </div>
                            </div></a>
                            <a className="a" href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><div className="show">
                                <img src="./profilePic.jpg" alt="pic" />
                                <div className="show-details">
                                    <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h2>Suraj Ambekar</h2></a>
                                    <h3>Free Resources For Your Web Development Career</h3>
                                    <div className="views">
                                        <div className="i"><i class="fa-solid fa-newspaper"></i></div><span>268 views</span>
                                    </div>
                                </div>
                            </div></a>
                            <a className="a" href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><div className="show">
                                <img src="./profilePic.jpg" alt="pic" />
                                <div className="show-details">
                                    <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h2>Suraj Ambekar</h2></a>
                                    <h3>How to create a Responsive Website</h3>
                                    <div className="views">
                                        <div className="i"><i class="fa-solid fa-newspaper"></i></div><span>268 views</span>
                                    </div>
                                </div>
                            </div></a>
                            <a className="a" href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><div className="show">
                                <img src="./profilePic.jpg" alt="pic" />
                                <div className="show-details">
                                    <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h2>Suraj Ambekar</h2></a>
                                    <h3>Introduction to JavaScript</h3>
                                    <div className="views">
                                        <div className="i"><i class="fa-solid fa-newspaper"></i></div><span>268 views</span>
                                    </div>
                                </div>
                            </div></a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main