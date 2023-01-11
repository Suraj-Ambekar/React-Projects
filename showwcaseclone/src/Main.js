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
                                <div>
                                    <h5>Introduction to CSS Flexbox</h5>
                                    <h5>1. Set the viewport</h5>
                                    <h5>2. Set appropriate breakpoints on you website</h5>
                                    <h5>3. Use Fluid Grid</h5>
                                    <h5>4. Tak touch screen into consideration</h5>
                                    <h5>5. Define typography</h5>
                                    <h5>Conclusion</h5>
                                </div>
                            </div>
                            <div>
                                {/* **********************MAIN CONTENT******************** */}
                            </div>
                            <div className="tags-name">
                                <span className="tag-names">letslearntogether</span>
                                <span className="tag-names">mern</span>
                                <span className="tag-names">365daysofcontent</span>
                                <span className="tag-names">css</span>
                                <span className="tag-names">flexbox</span>
                                {/* <span className="tag-name"></span> */}
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
                            <div className="hr-line"></div>
                            <div className="comment-profile-view">
                                <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer">
                                    <img src="./ProfilePic.jpg" alt="profile"/>
                                </a>
                                <div className="comment-profile-view-div">
                                    <div>
                                        <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h4 className="name">Suraj Ambekar</h4></a>
                                        <a href="https://www.showwcase.com/surajambekar" target="_blank" rel="noreferrer"><h5 className="u-name">@surajambekar</h5></a>
                                    </div>
                                    <h5 className="u-name">Mumbai, India</h5>
                                    <p className="para">I am a MERN Stack Developer and I love to code.</p>
                                </div>
                            </div>
                            <div className="comment-section">
                                <h3 className="discussion">Discussion</h3>
                                <div className="comment-box">
                                    <textarea placeholder="Write something nice"></textarea>
                                    <div className="styling">
                                        <div className="style-icons">
                                            <div className="icons">
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-h"></i>
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-b"></i>
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-italic"></i>
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-quote-left"></i>  
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-code"></i>
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-link"></i>
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-list-ul"></i>
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-list-ol"></i>
                                                </div>
                                                <div className="style-ic">
                                                    <i class="fa-solid fa-image"></i>
                                                </div>
                                            </div>
                                            <div className="style-btns">
                                                <div className="style-btn write">
                                                    <i class="fa-sharp fa-solid fa-pen"></i>
                                                    <span className="write">Write</span>
                                                </div>
                                                <div className="style-btn">
                                                    <i class="fa-solid fa-eye"></i>
                                                    <span className="preview">Preview</span>
                                                </div>
                                                <button className="style-btn send-btn">
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="last-section">
                                <div><h3>More Shows</h3></div>
                                <div className="shows-list">
                                    <div className="listed-show">
                                        <div className="listed-show-img">
                                            <img src="https://project-assets.showwcase.com/300x/49986/1670583348584-response.jpg?type=webp" alt="intro pic" />
                                        </div>
                                        <div className="listed-show-content">
                                            <div className="div">
                                                <i class="fa-solid fa-newspaper"></i>
                                                <span>Blog</span>
                                            </div>
                                            <h3><a href="https://www.showwcase.com/show/19194/how-to-create-a-responsive-website">How to create a Responsive Website</a></h3>
                                            <p>Exaplaination about how to create a responsive website</p>
                                            <div className="pc">
                                                <img src="ProfilePic.jpg" alt="picc" />
                                                <p>Suraj - 3 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listed-show">
                                            <div className="listed-show-img">
                                                <img src="https://project-assets.showwcase.com/300x/49986/1670028714669-web.jpg?type=webp" alt="intro pic" />
                                            </div>
                                            <div className="listed-show-content">
                                                <div className="div">
                                                    <i class="fa-solid fa-newspaper"></i>
                                                    <span>Blog</span>
                                                </div>
                                                <h3><a href="https://www.showwcase.com/show/18962/free-resources-for-your-web-development-career">Free Resources For Your Web Developement Career</a></h3>
                                                <p>Uploaded so many free resource for your web developement career</p>
                                                <div className="pc">
                                                    <img src="ProfilePic.jpg" alt="picc" />
                                                    <p>Suraj - 3 min read</p>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="listed-show">
                                        <div className="listed-show-img">
                                            <img src="https://project-assets.showwcase.com/49986/1669399632482-Team%2520of%2520tiny%2520business%2520persons%2520launching%25" alt="intro pic" />
                                        </div>
                                        <div className="listed-show-content">
                                            <div className="div">
                                                <i class="fa-solid fa-newspaper"></i>
                                                <span>Blog</span>
                                            </div>
                                            <h3><a href="https://www.showwcase.com/show/18714/12-steps-you-need-to-take-before-deploying-your-website">12 Steps You Need To Take Before Deploying ...</a></h3>
                                            <p>Explained 12 steps you nened to tak before deploying your website</p>
                                            <div className="pc">
                                                <img src="ProfilePic.jpg" alt="picc" />
                                                <p>Suraj - 3 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listed-show">
                                        <div className="listed-show-img">
                                            <img src="https://project-assets.showwcase.com/300x/49986/1668770804562-Front%2520End%2520Developer.jpg?type=webp" alt="intro pic" />
                                        </div>
                                        <div className="listed-show-content">
                                            <div className="div">
                                                <i class="fa-solid fa-newspaper"></i>
                                                <span>Blog</span>
                                            </div>
                                            <h3><a href="https://www.showwcase.com/show/18485/how-to-become-a-front-end-developers">How to Become a Front-End Developer?</a></h3>
                                            <p>Exaplained how we can become a Fron-Eend developer</p>
                                            <div className="pc">
                                                <img src="ProfilePic.jpg" alt="picc" />
                                                <p>Suraj - 3 min read</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                            <span className="tag-names">letslearntogether</span>
                            <span className="tag-names">mern</span>
                            <span className="tag-names">365daysofcontent</span>
                            <span className="tag-names">css</span>
                            <span className="tag-names">flexbox</span>
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