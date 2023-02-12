import { Link } from "react-router-dom";
const PRODUCTS = [
    {id: 'p1' , title: 'products 1'},
    {id: 'p2' , title: 'products 2'},
    {id: 'p3' , title: 'products 3'},
];

function ProductsPage() { 
    return (
        <>
            <p>This is a Product Page</p>
            <ul>
                {PRODUCTS.map((p) => (
                    <li key={p.id}>
                        <Link to={p.id} >{p.title}</Link>
                    </li>
                ))}
            </ul>
        </>
        
    )
}

export default ProductsPage;