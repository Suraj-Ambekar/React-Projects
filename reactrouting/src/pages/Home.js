import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <div>My Home Page.</div>
            {/* <a href="/products">Products page</a> This is a wrong approach */}
            <Link to="/products">Products page</Link>
        </div>
        
    )
}

export default HomePage;