import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Container, Row, Col } from "react-bootstrap";
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://frozen-ravine-97726.herokuapp.com/allOrders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setAllOrders(data))
    } , [user.email] );

    return (
        <Container>
             <h2 style={{ color: 'red'}} className="my-3">My Orders</h2>
           <Col xm={12} sm={12} md={6} lg={4}>
           {
                    allOrders.map(allOrder => <MyOrder
                    key = {allOrder._id}
                    allOrder={allOrder}
                    ></MyOrder>)
            }
           </Col>
        </Container>
    );
};

export default MyOrders;