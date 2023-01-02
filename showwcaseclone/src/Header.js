import './Header.css';

export default function Header(){
    return(
        <header className="header">
            <nav className="navbar">
                <div className="back-btn">
                    <i class="fa-solid fa-angle-left angle-left"></i>
                    <span className="back">Back</span>
                </div>
                <div className="profile-menu">
                    <div>
                    <i class="fa-solid fa-bell bell"></i>
                    </div>
                    <div className="profile">
                        <img className="profile-photo" src="./profilePic.jpg" alt="profile" />
                        <span className="user-name">Suraj Ambekar</span>
                        <i class="fa-sharp fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}