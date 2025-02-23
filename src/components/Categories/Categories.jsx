import PropTypes from "prop-types";

const Categories = ({ categories, handleCategories }) => {

    // console.log(categories);

    return (
        <aside className="bg-white  rounded-2xl w-full md:w-auto md:float-left">
                <div className="space-y-6">
                    <button onClick={handleCategories}
                     className="btn w-full rounded-full">All Products</button>
                    {
                        categories.map((category, idx) => <button 
                        key={idx} 
                        className="btn w-full rounded-full" 
                        onClick={() => handleCategories(category)}>
                            {category}
                        </button>)
                    }
                </div>
            </aside >
    );
};

Categories.propTypes = {
    categories: PropTypes.array,
    handleCategories: PropTypes.func
}

export default Categories;