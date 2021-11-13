import React, { useState, useEffect } from 'react';
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
        <div>
            <h2 style={{marginLeft: 350}}>Manage Products</h2>
            <div className="manage-products">
                {
                        products.map(product => <ManageProduct
                        key = {product.id}
                        product={product}
                        ></ManageProduct>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;