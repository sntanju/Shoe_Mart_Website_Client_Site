import React from 'react';

const Review = ({review}) => {

    const {description, name, img} = review || {};

    return (
        <div>
            <h2>Our Customers Review</h2>

        </div>
    );
};
export default Review;