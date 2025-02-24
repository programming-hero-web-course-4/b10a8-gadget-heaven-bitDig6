import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";


const CategoryAndProductContainer = () => {
    const [products, setProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([...products]);

    useEffect( () => {
        fetch('gadgets.json')
            .then( res => res.json())
            .then(data => setProducts(data))
    } , [])

    //storing the category names
    const categories = products.map( product => product.category);
    const uniqueCategories = [];

    categories.forEach( p => {
        if(! uniqueCategories.includes(p) ){
            uniqueCategories.push(p);
        }
    })

    const handleCategories = (category, id) => {
            // console.log(category, id);

            document.getElementById('btn-all').classList.remove('btn-activated');
            document.getElementById('btn-Laptops').classList.remove('btn-activated');
            document.getElementById('btn-iPhone').classList.remove('btn-activated');
            document.getElementById('btn-MacBook').classList.remove('btn-activated');
            document.getElementById('btn-Smart Watches').classList.remove('btn-activated');
            document.getElementById('btn-Accessories').classList.remove('btn-activated');

            const temp = [...uniqueCategories];
            if( category === 'all'){
                setNewProducts(products);
            }else
            {
                const activeCategory = temp.filter( c => c === category).join();
                const newProducts = products.filter( product => product.category === activeCategory)
            setNewProducts(newProducts);
            }
            document.getElementById(id).classList.add('btn-activated')
            // console.log(activeCategory);      
        }
    
    // console.log(uniqueCategories);

    return (
        <div style={{ width: '85%', margin: '0 auto' }}
        className="space-x-6 space-y-6">
         <aside className="w-full md:w-1/5 bg-white p-6 rounded-2xl  md:float-left"><Categories categories={uniqueCategories} handleCategories={handleCategories}></Categories></aside>
        
        <Products products={ newProducts.length === 0 ? products : newProducts }></Products>
        
    </div>
    );
};

export default CategoryAndProductContainer;