import PropTypes from "prop-types";
import Product from "../Product/Product";

const Products = ({products}) => {   
    // console.log(products);
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                products.map( (product, idx) => <Product key={idx} product={product}></Product>)
            }
        </div>
    );
};

Products.propTypes = {
    products: PropTypes.array
}

export default Products;