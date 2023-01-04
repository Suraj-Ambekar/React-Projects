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
        <div className="sideebar">
            <div className="sidebar-content">
                <a href="www.showwcase.com"><img className="logo" src="./showwcase_logo.png" alt="showwcase logo" /></a>
                <div className="btn">
                    <button className="add"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </div>
    )
}