import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageAllOrder from '../MaanageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://frozen-ravine-97726.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    } ,[allOrders]);



    return (
        <Container>
            <h2 className='my-4 text-danger'>Order Of All The Customer</h2>
           <Row>
           {
                    allOrders.map(allOrder => <ManageAllOrder
                    key = {allOrder._id}
                    allOrder={allOrder}
                    ></ManageAllOrder>)
            }
           </Row>
        </Container>
    );
};

export default ManageAllOrders;