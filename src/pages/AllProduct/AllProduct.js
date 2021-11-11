import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router-dom';


const AllProduct = ({product}) => {

    const {id, description, name, img, price} = product || {};
    const shoppingcartIcon = <FontAwesomeIcon icon={faShoppingCart} />  
    const history = useHistory();
    const handleDetails = (id) => {
        const uri = `/productDetails/${id}`;
        history.push(uri);

    } 
    return (
        <div className="product">
           <img src={img} alt="" />
            <div className="product-info">
            <h2>{name}</h2>
            <p className="p-2">{description}</p>
            <h4><b>Price: ${price}</b></h4>
            <button onClick={ () => handleDetails(id)}  > {shoppingcartIcon} Buy Now</button>
            </div>
        </div>
    );
};

export default AllProduct;