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

    const handleCategories = category => {
            // console.log(category);
            const temp = [...uniqueCategories];
            if( category === 'All Products'){
                setNewProducts(products);
            }else
            {
                const activeCategory = temp.filter( c => c === category).join();
                const newProducts = products.filter( product => product.category === activeCategory)
            setNewProducts(newProducts);
            }
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