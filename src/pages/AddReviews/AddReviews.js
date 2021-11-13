import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './AddReviews.css';

const AddReviews = () => {

    const [reviews, setReviews] = useState([]);   
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://frozen-ravine-97726.herokuapp.com/reviews', data)
        .then(res => {
            if(res.data.insertedId) {
                alert('Your Reviews Added Sucessfully');
                reset();
            }
        })
    }

    useEffect( () => {
        fetch('https://frozen-ravine-97726.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);

    return (
        <div className="add-reviews">
            <h3 className="text-danger m-2 p-2">Add A Review</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("img")} placeholder="Your Image" />
                    <input {...register("name")} placeholder="Your Name" />
                    <input type="number" {...register("star")} placeholder="Rating" />
                    <input {...register("description")} placeholder="Description" />
                        <br />
                    <input type="submit" placeholder="Add"/>
                </form>

        </div>
    );
};

export default AddReviews;