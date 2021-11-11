import React from 'react';
import './Review.css';

const Review = ({review}) => {

    const {description, name, img} = review || {};

    return (
        <div className="review">
             <img src={img} alt="" />
            <div className="product-info">
            <h2>{name}</h2>
            <p className="p-2">{description}</p>
            </div>

        </div>
    );
};
export default Review;