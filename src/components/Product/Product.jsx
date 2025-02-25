import PropTypes from "prop-types";
import { Link } from "react-router";

const Product = ({ product }) => {
    const { product_id, product_title, product_image, price } = product;

    return (
        <div className="card bg-white shadow-sm rounded-xl">
            <figure className="w-full h-56 pt-5">
                <img style={{ width: '85%', margin: 'mx-auto' }}
                    className="h-full border-2 border-gray-400 rounded-xl"
                    src={product_image}
                    alt={`image of ${product_title}`} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-semibold">{product_title}</h2>
                <p className="text-base font-medium text-gray-500">Price: {price}</p>
                <div className="card-actions">
                    <Link to={`/products/${product_id}`}>
                        <button
                            className="btn bg-white text-blueviolet-100 border-2 border-blueviolet-100 rounded-full my-5">View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
}

export default Product;