import React from 'react';
import { useHistory } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {

    const {id, description, name, img, price} = product || {};
    const history = useHistory();
    const handleDetails = (id) => {
        const uri = `/productdetails/${id}`;
        history.push(uri);
    }

    return (
        <div className="product">
           <img src={img} alt="" />
            <div className="product-info">
            <h2>{name}</h2>
            <p className="p-2">{description}</p>
            <h4><b>Price: ${price}</b></h4>
            <button  onClick={ () => handleDetails(id)} >Buy Now</button>
            </div>
        </div>
    );
};

export default Product;