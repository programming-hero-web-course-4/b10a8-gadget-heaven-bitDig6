import PropTypes from "prop-types";

const Category = ({category}) => {
    return (
        <div>
           <button className="btn w-full rounded-full">{category}</button>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.string,
}

export default Category;