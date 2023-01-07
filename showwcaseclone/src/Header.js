import './Header.css';
import './Dropdown.css';

export default function Header(){
    return(
        <header className="header">
            <nav className="navbar">
                <div className="back-btn">
                    <i class="fa-solid fa-angle-left angle-left"></i>
                    <span className="back">Back</span>
                </div>
                <div className="profile-menu">
                    <div className='bells'>
                    <i class="fa-solid fa-bell bell"></i>
                    </div>
                    <div className="profile">
                        <img className="profile-photo" src="./profilePic.jpg" alt="profile" />
                        <span className="user-name">Suraj Ambekar</span>
                        <i class="fa-sharp fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div className="dropdown">
                <div className="dropdown-first-section">
                    <a href="www.google.com">
                        <div className="image">
                            <img src="./profilePic.jpg" alt="profile" />
                        </div>
                        <div className="dropdown-username">
                            <span className="name">Suraj Ambekar</span>
                            <span className="user-id">@surajambekar</span>
                        </div>
                    </a>
                </div>
                <hr className='style' />
                {/* <div className="hr">
                    
                </div>    */}
                <div className="dropdown-second-section">
                    <div className="div">
                        <a className="sub-section" href="www.google.com">
                            <div>
                                <i class="fa-sharp fa-solid fa-table-columns"></i>
                                <span>Dashboard</span>
                            </div>
                        </a>
                        <a className="sub-section" href="www.google.com">
                            <div>
                                <i class="fa-solid fa-user-group"></i>
                                <span>Referrals</span>
                            </div>
                        </a>
                        <a className="sub-section" href="www.google.com">
                            <div>
                                <i class="fa-regular fa-newspaper"></i>
                                <span>Post Drafts</span>
                            </div>
                        </a>
                        <a className="sub-section" href="www.google.com">
                            <div>
                                <i class="fa-sharp fa-solid fa-clock"></i>
                                <span>Scheduled Posts</span>
                            </div>
                        </a>
                        <a className="sub-section" href="www.google.com">
                            <div>
                                <i class="fa-solid fa-gear"></i>
                                <span>Settings</span>
                            </div>
                        </a>
                        <a className="sub-section" href="www.google.com">
                            <div>
                                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                <span>Log out</span>
                            </div>
                        </a>
                    </div>
                </div> 
                <hr className='style' />
                {/* <div className="hr">
                    
                </div> */}
                <div className="dropdown-third-section">
                    <div className="div">
                        <span className="p">Jobs</span>
                        <a className="sub-section" href="www.google.com">
                            <div>
                                <i class="fa-solid fa-building"></i>
                                <span>Create a Company</span>
                            </div>
                        </a>
                        <a className="sub-section" href="www.google.com">
                            <div>
                                <i class="fa-solid fa-plus"></i>
                                <span>Post a Job</span>
                            </div>
                        </a>
                        <a className="sub-section" href="www.google.com">
                            <div>
                                <i class="fa-solid fa-briefcase"></i>
                                <span>Job Dashboard</span>
                            </div>
                        </a>
                    </div>
                </div>
                <hr className='style' />
                {/* <div className="hr">
                    
                </div> */}
                <div className="dropdown-fourth-section">
                    <div className="div">
                        <span className="p">Appearance</span>
                        <div className="modes">
                            <div className="dark mode active">Dark</div>
                            <div className="light mode">Light</div>
                            <div className="system mode">System</div>
                        </div>
                    </div>
                </div>
            </div>
            </nav>
            
        </header>
    )
}