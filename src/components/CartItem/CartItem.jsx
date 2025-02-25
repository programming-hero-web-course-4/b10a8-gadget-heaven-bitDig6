import PropTypes from "prop-types";
import { TiDeleteOutline } from "react-icons/ti";

const CartItem = ({ cartItem, handleRemoveFromCart }) => {
    const { product_id, product_image, product_title, description, price } = cartItem;

    return (
        <div className="bg-base-100 flex justify-between items-center shadow-sm rounded-xl p-6">
            <div className="flex flex-col md:flex-row gap-4">
                <figure className="w-24 h-24 md:w-48 md:h-32">
                    <img className="w-full h-full object-cover rounded-xl" src={product_image} alt="player-image" />
                </figure>
                <div className="space-y-2">
                    <p className="font-semibold text-2xl">{product_title}</p>
                    <p className="text-lg text-gray-400">{description}</p>
                    <p className="text-xl font-semibold">Price: ${price}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemoveFromCart(product_id)}
                    title="Delete this product" 
                    className="text-red-600 text-2xl">
                    <TiDeleteOutline></TiDeleteOutline>
                </button>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    cartItem: PropTypes.object,
    handleRemoveFromCart: PropTypes.func
}

export default CartItem;