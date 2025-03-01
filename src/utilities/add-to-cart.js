import { toast } from "react-toastify";
const getCartFromLS = () =>{
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if(!storedCart){
        return [];
    }
    return storedCart;
}

const addToCart = id => {
    const storedCart = getCartFromLS();
    if(storedCart.includes(id)){
        console.log(`${id} already on the cart`);
        toast("Product is already added to the Cart");
        return;
    }
    storedCart.push(id);
    localStorage.setItem('cart', JSON.stringify(storedCart));
    toast("Added to Cart Successfully");
}

const removeFromCart = id => {
    const storedCart = getCartFromLS();
    const newStoredCart = storedCart.filter( s => s !== id );
    localStorage.setItem('cart', JSON.stringify(newStoredCart));
    toast('Removed product from Cart');
}

export { getCartFromLS, addToCart, removeFromCart};