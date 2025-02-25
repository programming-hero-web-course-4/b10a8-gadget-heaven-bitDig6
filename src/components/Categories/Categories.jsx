import PropTypes from "prop-types";

const Categories = ({ categories, handleCategories }) => {

    // console.log(categories);

    return (
        <aside className="bg-white  rounded-2xl w-full md:w-auto md:float-left">
                <div className="space-y-6">
                    <button id="btn-all" onClick={() => handleCategories('all', 'btn-all')}
                     className="btn btn-sm lg:btn-md w-full rounded-full btn-activated">All Products</button>
                    {
                        categories.map((category, idx) => <button 
                        id={`btn-${category}`}
                        key={idx} 
                        className="btn btn-sm lg:btn-md w-full rounded-full" 
                        onClick={() => handleCategories(category, `btn-${category}`)}>
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