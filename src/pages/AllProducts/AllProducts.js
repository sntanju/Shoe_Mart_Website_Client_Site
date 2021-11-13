import React, { useState, useEffect } from 'react';
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
        <div>
            <h2 className=" bg-info m-0 p-3 text-light">All Of Our Products</h2>
            <div className="all-products">
                {
                        products.map(product => <AllProduct
                        key = {product.id}
                        product={product}
                        ></AllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;