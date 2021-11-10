import React from 'react';


const AllProduct = ({product}) => {

    const {id, description, name, img, price} = product || {};

    return (
        <div className="product">
           <img src={img} alt="" />
            <div className="product-info">
            <h2>{name}</h2>
            <p className="p-2">{description}</p>
            <h4><b>Price: ${price}</b></h4>
            <button >Buy Now</button>
            </div>
        </div>
    );
};

export default AllProduct;