import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);
    const size = 6;

    useEffect(() => {
        fetch(`https://frozen-ravine-97726.herokuapp.com/products?size=${size}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[]);


    return (
        <div>
            <h2 className="our-product">Our Latest Products</h2>
            <div className="products">
                {
                        products.map(product => <Product
                        key = {product.id}
                        product={product}
                        ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;