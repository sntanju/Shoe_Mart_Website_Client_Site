import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Col, Row } from "react-bootstrap"; 
import { useForm } from 'react-hook-form';
import './AddProducts.css';

const AddProducts = () => {

    const [products, setProducts] = useState([]);   
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://frozen-ravine-97726.herokuapp.com/products', data)
        .then(res => {
            if(res.data.insertedId) {
                alert('Product Added Sucessfully');
                reset();
            }
        })
    }

    useEffect( () => {
        fetch('https://frozen-ravine-97726.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <Row>
            <Col  xm={0} sm={0} md={3} lg={4}></Col>
            <Col className="add-products" xm={12} sm={12} md={6} lg={4}>
                <h3 className="text-danger m-2 p-2">Add A Product</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("img")} placeholder="Product Image" />
                        <input {...register("name")} placeholder="Product Name" />
                        <input {...register("description")} placeholder="Description" />
                        <input type="number" {...register("price")} placeholder="Price" />
                            <br />
                        <input className='addProduct' type="submit" placeholder="Add"/>
                    </form>

            </Col>
            <Col  xm={0} sm={0} md={3} lg={4}></Col>
        </Row>
    );
};

export default AddProducts;