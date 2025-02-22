import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('gadgets.json')
            .then( res => res.json())
            .then(data => setProducts(data))
    } , [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                products.map( (product, idx) => <Product key={idx} product={product}></Product>)
            }
        </div>
    );
};

export default Products;