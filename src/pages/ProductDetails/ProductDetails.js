import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { Container, Row, Col } from 'react-bootstrap';
import './ProductDetails.css';

const ProductDetails = () => {
    const { user } = useAuth();
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const [singleDetails, setSingleDetails] = useState({});

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://frozen-ravine-97726.herokuapp.com/allOrders', data)
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
        <Container>
            <Row>
            <Col className="user-info" sm={12} md={12} lg={12} xm={12}>
            <h3>{user?.displayName}</h3>   
            <h5>{user?.email}</h5>
            </Col>


            
                <Col className="booking-info  my-5" sm={12} md={12} lg={5} xm={12}>
                    <img src={singleDetails?.img} alt="" />
                    <h2> {singleDetails?.name}</h2>
                    <p>{singleDetails?.description}</p>
                    <h4>Price: {singleDetails?.price}</h4>
                </Col>

                <Col sm={0} md={0} lg={2} xm={0}></Col>

                <Col className="input-form my-5" sm={12} md={12} lg={5} xm={12}>
                <form onSubmit={handleSubmit(onSubmit)}>
                
                    <Col sm={12} md={12} lg={12} xm={12}><input {...register("name")} placeholder=" Name" /></Col>

                    <Col sm={12} md={12} lg={12} xm={12}><input {...register("address")} placeholder="Address" /></Col>

                    <Col sm={12} md={12} lg={12} xm={12}><input {...register("product")} placeholder="Product Name" /></Col>

                    <Col><input type="number" {...register("phone")} placeholder="Phone" /></Col>
                    <br />
                    <Col sm={12} md={12} lg={12} xm={12} ><input className="submit" type="submit" placeholder="Order Now"/></Col>
                </form>
                </Col>
           

            </Row>
        </Container>
    );
};

export default ProductDetails;