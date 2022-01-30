import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';
import './ManageProducts.css';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://frozen-ravine-97726.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);


    return (
        <Container>
            <h2 className='my-5'>Manage Products</h2>
            <Row xs={1} sm={1} md={2} lg={3}>
                {
                        products.map(product => <ManageProduct
                        key = {product.id}
                        product={product}
                        ></ManageProduct>)
                }
            </Row>
        </Container>
    );
};

export default ManageProducts;