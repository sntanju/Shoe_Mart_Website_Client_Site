import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './ProductDetails.css';

const ProductDetails = () => {
    const { user } = useAuth();
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const [singleDetails, setSingleDetails] = useState({});

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://frozen-ravine-97726.herokuapp.com/productDetails', data)
        .then(res => {
            if(res.data.insertedId) {
                alert('Ordered Sucessfully');
                reset();
            }
        })
    }

    useEffect( () => {
        fetch('https://frozen-ravine-97726.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, []);

    useEffect( () => {
        if(details.length > 0) {
            const matchedDetails = details.find(detail => detail.id == id )
            setSingleDetails(matchedDetails);
        }
    }, [details]);
    

    return (
        <div>
            <div className="user-info">
            <h3>{user?.name}</h3>   
            <h5>{user?.email}</h5>
            </div>

            <div className="booking">
                <div className="booking-info">
                    <img src={singleDetails?.img} alt="" />
                    <h2> {singleDetails?.name}</h2>
                    <p>{singleDetails?.description}</p>
                    <h4>Price: {singleDetails?.price}</h4>
                </div>

                <div className="input-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                
                    <input {...register("name")} placeholder=" Name" />
                    <input {...register("address")} placeholder="Address" />
                    <input {...register("product")} placeholder="Product Name" />
                    <input type="number" {...register("phone")} placeholder="Phone" />
                        <br />
                    <input type="submit" placeholder="Buy"/>
                </form>
                </div>
            </div>

            
        </div>
    );
};

export default ProductDetails;