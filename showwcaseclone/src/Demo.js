import './Demo.css';
// import communites from './communities';

// const community = communites.map(item=>{
//     return(
//       <div className="communities">
//         <div className="circle"></div>
//         {/* <div className="imgs-name"> */}
//             <img className="community-imgs" src={item.src} alt={item.alt} />
//         {/* </div> */}
//         <span>{item.name}</span>
//       </div>
//     )
//   })

export default function Demo(){
    
    return(
        <div className="sidebar">
            <a href="www.showwcase.com"><img className="logo" src="./showwcase_logo.png" alt="showwcase logo" /></a>
            <div className="sidebar-content">
                <div className="btn">
                    <button className="add"><i class="fa-solid fa-plus"></i></button>
                </div>
                <div className="home">
                    <a href="www.google.com"><i class="fa-solid fa-house"></i><span className="active">Home</span></a>
                    <a href="www.google.com"><i class="fa-solid fa-newspaper"></i><span>Shows</span></a>
                    <a href="www.google.com"><i class="fa-sharp fa-solid fa-users"></i><span>Circles</span></a>
                    {/* <a href="www.google.com"><i class="fa-regular fa-circle-star"></i><span>Circles</span></a> */}
                    <a href="www.google.com"><i class="fa-solid fa-briefcase"></i><span>Work</span></a>
                    <a href="www.google.com"><i class="fa-solid fa-bookmark"></i><span>Bookmarks</span></a>
                    <a href="www.google.com"><i class="fa-solid fa-boxes-stacked space"></i><span>AllCommunities</span></a>
                    {/* <hr className="hr" color="gray" /> */}      
                </div>
                <hr className="hr" color="gray" />
                <div className="second-container">
                    <a href="www.google.com">
                        <div className="cName">
                            <div className="circle"></div>
                            <img className="community-imgs" src="https://profile-assets.showwcase.com/137x/11145/1637849670322-100.jpg?type=webp" alt="{item.alt}" />
                            <span className="active">Home</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}