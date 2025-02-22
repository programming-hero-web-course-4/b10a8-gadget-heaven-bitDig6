import Category from "../Category/Category";


const Categories = () => {
   const categories = [
    "All Products",
    "Laptops",
    "Phones",
    "Accessories",
    "Smart Watches",
    "MacBook",
    "iPhone"
   ];

   
    return (
        <div className="space-y-6">
          {
            categories.map( (category, idx) => <Category key={idx} category={category}></Category>)
          }
        </div>
    );
};

export default Categories;