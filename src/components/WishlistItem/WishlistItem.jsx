import PropTypes from "prop-types";
import { TiDeleteOutline } from "react-icons/ti";

const WishlistItem = ({wishlistItem, handleRemoveFromWishList}) => {
    const {product_id, product_image, product_title, description, price}  = wishlistItem;

    return (
        <div className="bg-base-100 flex justify-between items-center shadow-sm rounded-xl p-6">
            <div className="flex gap-4">
                <figure className="w-48 h-32">
                    <img className="w-full h-full object-cover rounded-xl" src={product_image} alt="player-image" />
                </figure>
                <div className="space-y-2">
                    <p className="font-semibold text-2xl">{product_title}</p>
                    <p className="text-lg text-gray-400">{description}</p>
                    <p className="text-xl font-semibold">Price: ${price}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemoveFromWishList(product_id)}
                 title="Delete this product" className="text-red-600 text-2xl">
                    <TiDeleteOutline></TiDeleteOutline>
                </button>
            </div>
        </div>
    );
};

WishlistItem.propTypes = {
    wishlistItem: PropTypes.object,
    handleRemoveFromWishList: PropTypes.func
}

export default WishlistItem;