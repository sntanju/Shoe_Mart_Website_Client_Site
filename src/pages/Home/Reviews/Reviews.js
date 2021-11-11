import React, { useState, useEffect } from 'react';
import Review from '../Review/Review';

const reviews = [
    {
        img: "",
        name: "",
        description: ""
    },
    {
        img: "",
        name: "",
        description: ""
    },
    {
        img: "",
        name: "",
        description: ""
    },
];

const Reviews = () => {
    const [products, setProducts] = useState([]);
    const size = 6;

    useEffect(() => {
        fetch(`https://frozen-ravine-97726.herokuapp.com/reviews`)
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);


    return (
        <div>
            <h2 className="our-product">Our Customers Reviews</h2>
            <div className="products">
                {
                        products.map(product => <Review
                        key = {product.id}
                        product={product}
                        ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;

// https://shoe-mart-website.web.app/