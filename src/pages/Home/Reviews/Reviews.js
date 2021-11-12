import React, { useState, useEffect } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://frozen-ravine-97726.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    } ,[]);


    return (
        <div>
            <h2 className="text-success m-2 p-3" >Our Customers Reviews</h2>
            <div className="reviews">
                {
                        reviews.map(review => <Review
                        key = {review.id}
                        review={review}
                        ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;



