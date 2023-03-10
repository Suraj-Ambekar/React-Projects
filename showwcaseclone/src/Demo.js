import './Demo.css';
import communites from './communities';
import './Header.css';
import { useState } from 'react';
// import {useState} from 'react';
// import {useState} from 'react';

const community = communites.map(item=>{
    let communityName = item.name;
    // console.log(communityName);
    // console.log(communityName.length)
    let changedCommunityName ="";

    if (communityName.length>18){
        changedCommunityName= communityName.slice(0,16)+"...";
    }else{
        changedCommunityName = communityName;
    }
    // console.log(b)

    return(
        <a className="home-a" href="www.google.com">
            <div className="cName">
                <div className="circle"></div>
                <img className="community-imgs" src={item.src} alt={item.alt} />
                <span className="active">{changedCommunityName}</span>
            </div>
            {/* <span onMouseOver={()=>mouse()} class="tooltip" className="tooltip">{communityName}</span> */}
        </a>
    )
  })

export default function Demo(){
    const [isMouseOver, setIsMouseOver] = useState(false);


    // let spanText = document.querySelector("tooltip");
    // window.onmousemove= function(e){
    //     let x = e.clientX, y = e.clientY;
    //     spanText.style.top = (y+20)+ 'px';
    //     spanText.style.left = (x+20) + 'px';
    // }
    
    return(
        <div className={isMouseOver ? "sidebar stick" : "sidebar fix"}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseOut={() => setIsMouseOver(false)}
        
        >
            <a href="www.showwcase.com"><img className="logo" src="./showwcase_logo.png" alt="showwcase logo" /></a>
            <div className="sidebar-content">
                <div className="btn">
                    <button className="add"><i class="fa-solid fa-plus"></i></button>
                </div>
                <div className="home">
                    <a className="home-a" href="www.google.com"><i class="fa-solid fa-house"></i><span>Home</span></a>
                    <a className="home-a" href="www.google.com"><i class="fa-solid fa-newspaper"></i><span>Shows</span></a>
                    <a className="home-a" href="www.google.com"><i class="fa-sharp fa-solid fa-users"></i><span>Circles</span></a>
                    {/* <a href="www.google.com"><i class="fa-regular fa-circle-star"></i><span>Circles</span></a> */}
                    <a className="home-a" href="www.google.com"><i class="fa-solid fa-briefcase"></i><span>Work</span></a>
                    <a className="home-a" href="www.google.com"><i class="fa-solid fa-bookmark"></i><span>Bookmarks</span></a>
                    <a className="home-a" href="www.google.com"><i class="fa-solid fa-boxes-stacked space"></i><span>All Communities</span></a>
                    {/* <hr className="hr" color="gray" /> */}      
                </div>
                <hr className="hr" color="gray" />
                <div className="second-container">
                    {/* <a href="www.google.com">
                        <div className="cName">
                            <div className="circle"></div>
                            <img className="community-imgs" src="https://profile-assets.showwcase.com/137x/11145/1637849670322-100.jpg?type=webp" alt="{item.alt}" />
                            <span className="active">Home</span>
                        </div>
                    </a> */}
                    {community}
                </div>
                <button className="refer-btn">
                    <i class="fa-solid fa-user-plus refer"></i>
                </button>
            </div>     
        </div>
    )
}