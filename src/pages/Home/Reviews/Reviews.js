import React, { useState, useEffect } from 'react';
import Review from '../Review/Review';

const reviews = [
    {
        img: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg",
        name: "Olivia",
        description: "I have visited in this shop various time. I am pleasure at their service.Also their products are branded and atractive.I really like this shop very much."
    },
    {
        img: "https://img.freepik.com/free-photo/happy-young-caucasian-female-wearing-blue-long-sleeved-shirt-making-thumb-up-sign_176420-15015.jpg?size=626&ext=jpg",
        name: "Amelia",
        description: "This shop is a good shop. Here i find various types of ladies shoes.But i think their service is not good as need.I think they should improve in this site. "
    },
    {
        img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg",
        name: "Isabella",
        description: "It was a shop of only female shoes. So its environment is perfect for the customer.Its products and services are also good. So it was a reasonable shop to me."
    },
];

const Reviews = () => {
    const [products, setProducts] = useState([]);
    const size = 6;

    useEffect(() => {
        fetch('https://spooky-werewolf-89746.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);


    return (
        <div>
            <h2 >Our Customers Reviews</h2>
            <div className="products">
                {
                        products.map(product => <Review
                        key = {product._id}
                        product={product}
                        ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;

// https://shoe-mart-website.web.app/

