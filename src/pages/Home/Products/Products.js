import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://frozen-ravine-97726.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);


    return (
        <Container>
            
            <h2 className="our-product">Our Latest Products</h2>
             <Row xs={1} sm={1} md={2} lg={3} >
             {
                        products.slice( 0, 6 ).map(product => <Product
                        key = {product.id}
                        product={product}
                        ></Product>)
                }
            </Row>
        </Container>
        
    );
};

export default Products;