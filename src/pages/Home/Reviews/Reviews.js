import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
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
        // <div>
        //     <h2 className="text-success m-2 p-3" >Our Customers Reviews</h2>
        //     <div className="reviews">
        //         {
        //                 reviews.map(review => <Review
        //                 key = {review._id}
        //                 review={review}
        //                 ></Review>)
        //         }
        //     </div>
        // </div>

        <Container >
                    
            <h2 className="text-success m-2 p-3" >Our Customers Reviews</h2>
        <Row xs={1} sm={1} md={2} lg={3} >
                {
                        reviews.map(review => <Review
                        key = {review._id}
                        review={review}
                        ></Review>)
                }
        </Row>
        </Container>

    );
};

export default Reviews;



