import React from 'react';

const Review = ({review}) => {

    const {description, name, img} = review || {};

    return (
        <div>
             <img src={img} alt="" />
            <div className="product-info">
            <h2>{name}</h2>
            <p className="p-2">{description}</p>
            </div>

        </div>
    );
};
export default Review;