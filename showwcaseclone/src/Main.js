import "./Main.css";

function Main(){
    return(
        <main className="main">
            <div className="container">
                <div className="content">
                    <div className="content-first-section">
                        <div className="content-cover-img">
                            {/* <img src="./flexbox.jpg" alt="cover img" /> */}
                        </div>
                        <div className="content-main">
                            <div className="content-info">
                                <button>
                                    <i class="fa-solid fa-newspaper"></i>
                                    <span>Blog</span>
                                </button>
                                <p>9 December, 2022 - 10 min read</p>
                                <div className="content-social-icons">
                                    <div className="social-icon">
                                        <i class="fa-brands fa-twitter"></i>
                                    </div>
                                    <div className="social-icon">
                                        <i class="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className="social-icon">
                                        <i class="fa-brands fa-linkedin-in"></i>
                                    </div>
                                    <div className="social-iconss">
                                        <i class="fa-solid fa-link"></i>
                                    </div>
                                    <div className="social-iconss">
                                        <i class="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="show-heading">
                                <h1>Introduction to CSS Flexbox</h1>
                            </div>
                            <div className="contributors">
                                <div className="contributors-pic">
                                    <span>Contributors</span>
                                    <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><img src="./ProfilePic.jpg" alt="contributors pic" /></a>
                                </div>
                                <div className="like">
                                    <div className="likes">
                                        <i class="fa-solid fa-heart"></i><span>50K</span>
                                    </div>
                                    <div className="comments">
                                        <i class="fa-solid fa-comment-dots"></i><span></span>
                                    </div>
                                    <div className="bookmark">
                                        <i class="fa-solid fa-bookmark"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="table-of-content">
                                <h3>Table of Contents</h3>
                                <h5>Introduction to CSS Flexbox</h5>
                            </div>
                        </div>
                    </div>
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