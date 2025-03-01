import { useEffect, useState } from "react";
import { GoSortDesc } from "react-icons/go";
import { getCartFromLS, removeFromCart } from "../../utilities/add-to-cart";
import { useLoaderData } from "react-router";
import { getWishListFromLS, removeFromWishlist } from "../../utilities/add-to-wishlist";
import CartItem from "../CartItem/CartItem";
import WishlistItem from "../WishlistItem/WishlistItem";
import Modal from "../Modal/Modal";
import { addTitle } from "../../utilities/addDynamicTittle";

const Dashboard = () => {
    addTitle('Dashboard');

    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [total, setTotal] = useState(0);


    const products = useLoaderData();
    let totalPrice = 0;
    cart.forEach(c => {
        totalPrice = totalPrice + c.price;
    })
    // console.log(totalPrice);

    const handleShowATab = id => {
        document.getElementById('cart').classList.add('hidden');
        document.getElementById('wishlist').classList.add('hidden');
        document.getElementById('btn-cart').classList.remove('dash-btn-active');
        document.getElementById('btn-wishlist').classList.remove('dash-btn-active');

        document.getElementById(id).classList.remove('hidden');
        document.getElementById(`btn-${id}`).classList.add('dash-btn-active')
    }

    const handleSortDescending = () => {
        const newCart = [...cart];
        const sortedNewCart = newCart.sort((a, b) => b.price - a.price);
        setCart(sortedNewCart);
    }

    const handleRemoveFromCart = id => {
        removeFromCart(id);
        const newCart = [...cart].filter(c => c.product_id !== id);
        setCart(newCart);
    }

    const handleRemoveFromWishList = id => {
        removeFromWishlist(id);
        const newWishlist = [...wishlist].filter(c => c.product_id !== id);
        setWishlist(newWishlist);
    }

    const handlePurchase = () => {
        setTotal(totalPrice);
        document.getElementById('dialog').showModal();

        cart.map(c => {
            removeFromCart(c.product_id);
        })
        setCart([]);
    }


    useEffect(() => {
        const storedCartFromLS = getCartFromLS();
        // console.log(storedCartFromLS);
        const cartItems = products.filter(product => storedCartFromLS.includes(product.product_id));
        // console.log(cartItems);
        setCart(cartItems);

        const storedWishlistFromLS = getWishListFromLS();
        const wishlistItems = products.filter(product => storedWishlistFromLS.includes(product.product_id));
        // console.log(wishlistItems);
        setWishlist(wishlistItems);
    }, [])

    return (
        <div className="w-full bg-base-200 pb-10">
            {/* title and subtitle */}
            <div className="bg-blueviolet-100 text-white text-center py-8">
                <h3 className="text-3xl font-bold mb-4">Dashboard</h3>
                <p className="lg:w-3/5 mx-auto text-base mb-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="">
                    <button id="btn-cart" onClick={() => handleShowATab('cart')}
                        className="mr-5 w-32 btn border bg-blueviolet-100 rounded-full text-white dash-btn-active">Cart</button>
                    <button id="btn-wishlist" onClick={() => handleShowATab('wishlist')}
                        className="btn w-32 bg-blueviolet-100 border rounded-full text-white">Wishlist</button>
                </div>
            </div>
            {/* lists */}
            <div id="cart" className="w-4/5 mx-auto my-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <h3 className="text-xl font-bold">Cart</h3>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <h3 className="text-xl font-bold">Total Price: $
                            {Math.round(totalPrice * 100) / 100}
                        </h3>
                        <div>
                            <button onClick={handleSortDescending}
                                className="btn mr-5 bg-none border border-blueviolet-100 text-blueviolet-100 text-lg font-semibold rounded-full">
                                Sort By Price <GoSortDesc></GoSortDesc>
                            </button>
                            <button disabled={cart.length === 0 & true}
                                onClick={handlePurchase}
                                className="btn rounded-full text-lg font-semibold  text-white bg-blueviolet-100 hover:bg-blue-500">
                                Purchase
                            </button>
                            <Modal total={total}></Modal>
                        </div>
                    </div>
                </div>
                {/* cart items */}
                <div className="grid grid-cols-1 gap-5">
                    {
                        cart.map(c => <CartItem
                            key={c.product_id}
                            cartItem={c}
                            handleRemoveFromCart={handleRemoveFromCart}></CartItem>)
                    }
                </div>
            </div>

            <div id="wishlist" className="hidden w-4/5 mx-auto my-8">
                <h3 className="text-xl font-bold mb-10">Wishlist</h3>
                <div className="grid grid-cols-1 gap-5">
                    {
                        wishlist.map(w => <WishlistItem
                            key={w.product_id}
                            wishlistItem={w}
                            handleRemoveFromWishList={handleRemoveFromWishList}></WishlistItem>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Dashboard;