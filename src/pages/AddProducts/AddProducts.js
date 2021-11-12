import axios from 'axios';
import React, { useState, useEffect } from 'react';
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
        <div className="add-products">
            <h3 className="text-danger m-2 p-2">Add A Product</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("img")} placeholder="Product Image" />
                    <input {...register("name")} placeholder="Product Name" />
                    <input {...register("description")} placeholder="Description" />
                    <input type="number" {...register("price")} placeholder="Price" />
                        <br />
                    <input type="submit" placeholder="Add"/>
                </form>

        </div>
    );
};

export default AddProducts;