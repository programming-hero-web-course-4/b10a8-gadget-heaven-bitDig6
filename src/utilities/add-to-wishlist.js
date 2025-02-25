import { toast } from "react-toastify";


const getWishListFromLS = () => {
    const storedWishList = JSON.parse(localStorage.getItem('wishlist'));
    if(!storedWishList){
        return [];
    }
    return storedWishList;
}

const addToWishList = id => {
    const storedWishList = getWishListFromLS();
    if(storedWishList.includes(id)){
        console.log(`${id} already on the wishlist`);
        // toast('Product already added to Wishlist');
        return 0;
    }
    storedWishList.push(id);
    localStorage.setItem('wishlist', JSON.stringify(storedWishList));
    toast('Successfully added to Wishlist');
}

const checkWishList = id => {
    const storedWishList = getWishListFromLS();
    if(storedWishList.includes(id)){
        return true;
    }
    return false;
}

export {getWishListFromLS, addToWishList, checkWishList};