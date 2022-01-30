import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Row, Col } from 'react-bootstrap';
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
        <Container>
            <Row>
                <Col sm={0} md={3} lg={3} xm={0}></Col>
                <Col className="add-reviews" sm={12} md={6} lg={6} xm={12}>
                    <h3 className="text-danger m-2 p-2">Please Add Your Review</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <input {...register("img")} placeholder="Your Image" />
                            <input {...register("name")} placeholder="Your Name" />
                            <input type="number" {...register("star")} placeholder="Rating" />
                            <input {...register("description")} placeholder="Description" />
                                <br />
                            <input className="review-submit" type="submit" placeholder="Add"/>
                        </form>

                </Col>
                <Col sm={0} md={3} lg={3} xm={0}></Col>
            </Row>
        </Container>
    );
};

export default AddReviews;