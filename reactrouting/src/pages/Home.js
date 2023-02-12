import { Link, useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/products');
    }

    return (
        <div>
            <div>My Home Page.</div>
            {/* <a href="/products">Products page</a> This is a wrong approach */}
            <Link to="/products">Products page</Link>
            <p>
                <button onClick={clickHandler}>Click here to go Products page</button>
            </p>
        </div>
        
    )
}

export default HomePage;