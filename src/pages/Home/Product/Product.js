import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {

    const {id, description, name, img, price} = product || {};
    const shoppingcartIcon = <FontAwesomeIcon icon={faShoppingCart} />  
    const history = useHistory();
    const handleDetails = (id) => {
        const uri = `/productDetails/${id}`;
        history.push(uri);
    }

    return (
        <div >
           <Col className="single-card my-5">
           <img src={img} alt="" />
            
            <h2>{name}</h2>
            <p className="p-2">{description}</p>
            <h4><b>Price: ${price}</b></h4>
            <button  onClick={ () => handleDetails(id)} > {shoppingcartIcon} Buy Now</button>
           
           </Col>
        </div>
    );
};

export default Product;