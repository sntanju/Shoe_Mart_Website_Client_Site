import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import AllProduct from '../AllProduct/AllProduct';
import './AllProducts.css';

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://frozen-ravine-97726.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);


    return (

        <Container>
            
            <h2 className=" all-products ">All Of Our Products</h2>
             <Row xs={1} sm={1} md={2} lg={2}>
             {
                        products.map(product => <AllProduct
                        key = {product.id}
                        product={product}
                        ></AllProduct>)
             }
            </Row>
        </Container>

    );
};

export default AllProducts;