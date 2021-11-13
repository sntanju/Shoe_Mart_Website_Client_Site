import React from 'react';
import './Review.css';
import Rating from 'react-rating';

const Review = ({review}) => {

    const {description, name, img, star} = review || {};

    return (
        <div className="review">
             <img src={img} alt="" />
            <div className="product-info">
            <h2>{name}</h2>
            <Rating className="star"
             initialRating={star}
             emptySymbol="far fa-star icon-color"
             fullSymbol="fas fa-star icon-color"
             readonly
             ></Rating>
            <p className="p-2">{description}</p>
            </div>

        </div>
    );
};
export default Review;