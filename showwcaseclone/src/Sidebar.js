import './Sidebar.css';
import communites from './communities';

const community = communites.map(item=>{
    return(
      <div className="communities">
        <div className="circle"></div>
        {/* <div className="imgs-name"> */}
            <img className="community-imgs" src={item.src} alt={item.alt} />
        {/* </div> */}
        <span>{item.name}</span>
      </div>
    )
  })

export default function Sidebar(){
    
    return(
        <section className="sidebar">
            <div className="container">
                <div className="first-container">
                    <img className="logo" src="./showwcase_logo.png" alt="showwcase logo" />
                    <button className="add"><i class="fa-solid fa-plus"></i></button>
                    <div className="home">
                        <a href="www.google.com"><i class="fa-solid fa-house"></i><span className="active">Home</span></a>
                        <a href="www.google.com"><i class="fa-solid fa-newspaper"></i><span>Shows</span></a>
                        <a href="www.google.com"><i class="fa-sharp fa-solid fa-users"></i><span>Circles</span></a>
                        {/* <a href="www.google.com"><i class="fa-regular fa-circle-star"></i><span>Circles</span></a> */}
                        <a href="www.google.com"><i class="fa-solid fa-briefcase"></i><span>Work</span></a>
                        <a href="www.google.com"><i class="fa-solid fa-bookmark"></i><span>Bookmarks</span></a>
                        <a href="www.google.com"><i class="fa-solid fa-boxes-stacked space"></i><span>AllCommunities</span></a>
                        <hr className="hr" color="gray" />
                    </div>
                </div>
                <div className="second-container">
                    {/* <div className="ci">
                        <img className="community-imgs" src="" alt="first" />
                    </div> */}
                        {community}
                </div>
                <button className="refer-btn">
                    <i class="fa-solid fa-user-plus refer"></i>
                </button>
            </div>
        </section>
    )
}