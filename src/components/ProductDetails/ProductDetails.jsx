import { useLoaderData, useParams } from "react-router";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { addToCart } from "../../utilities/add-to-cart";
import { addToWishList, checkWishList } from "../../utilities/add-to-wishlist";
import StarRatings from "../StarRatings/StarRatings";
import { addTitle } from "../../utilities/addDynamicTittle";

const ProductDetails = () => {
    const allProducts = useLoaderData();
    const id = parseInt(useParams().productId);
    // console.log(allProducts, id);

    const singleProduct = allProducts.filter(p => p.product_id === id)[0];
    // console.log(singleProduct);

    const { product_image, product_title, price, availability, description, specification, rating } = singleProduct;

    addTitle(product_title);

    const handleAddToCart = id => {
        addToCart(id);
    }

    const persistentDisabled = checkWishList(id);

    const handleAddToWishList = id => {
        addToWishList(id);
        document.getElementById('wish').setAttribute('disabled', true);
    }

    return (
        <div className="w-full bg-base-200 pb-10">
            <div className="bg-blueviolet-100 text-white text-center py-8">
                <h3 className="text-3xl font-bold mb-4">Product Details</h3>
                <p className="lg:w-3/5 mx-auto text-base">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className="w-4/5 mx-auto my-8 bg-white rounded-lg hero py-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img 
                        src={product_image}
                        className="md:w-1/2 rounded-lg shadow-2xl border-2 border-gray-300" />
                    <div className="space-y-5">
                        <h1 className="text-3xl font-semibold">{product_title}</h1>
                        <p className="text-xl font-semibold">Price: $ {price}</p>
                        {
                            availability ?
                                <span className="badge border border-olivegreen-100 rounded-full font-medium text-olivegreen-100 bg-olivegreen-100/10">In Stock</span>
                                :
                                <span className="badge border border-red-500 text-red-500 bg-red-500/10 rounded-full font-medium">Out of Stock</span>
                        }
                        <p className="text-lg">{description}</p>
                        <div>
                            <h4 className="font-bold text-lg">Specifications</h4>
                            <div className="space-y-2">
                                {
                                    specification.map((s, idx) => <p key={idx}>{`${idx + 1}. ${s}`}</p>)
                                }
                            </div>
                        </div>
                        <div>
                            <p className="text-lg font-bold mb-2">Rating</p>
                            <div className="flex gap-3">
                                <StarRatings rating={rating}></StarRatings>
                                <span className="badge">{rating}</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => handleAddToCart(id)}
                                className="btn rounded-full bg-blueviolet-100 font-bold text-lg text-white">
                                Add to Cart <BsCart></BsCart>
                            </button>
                            <button id="wish"
                                disabled={persistentDisabled & true}
                                onClick={() => handleAddToWishList(id)}
                                className="btn btn-circle bg-white">
                                <FaRegHeart></FaRegHeart>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;