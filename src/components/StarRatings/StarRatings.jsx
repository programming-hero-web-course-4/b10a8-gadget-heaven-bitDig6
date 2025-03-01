import PropTypes from "prop-types";

const StarRatings = ({rating}) => {
    const noOfStars = 5;
    const stars = Array(noOfStars).fill(0);
    const ratingRounded = Math.round(rating);
    return (
        <div className="flex gap-1">
            {
              stars.map( (_, idx) => <svg
              key={idx}
              xmlns="http://www.w3.org/2000/svg"
              fill={idx < ratingRounded ? "gold" : "gray"}
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg> )  
            }
        </div>
       
    );
};

StarRatings.propTypes = {
    rating: PropTypes.number,
}

export default StarRatings;