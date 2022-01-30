import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import './ManageAllOrder.css';


const ManageAllOrder = ({allOrder}) => {

    const {name, address, product, phone} = allOrder || {};
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://frozen-ravine-97726.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const handleDelete = id => {
        alert("Are You Confirm To Delete?");
        const url = `https://frozen-ravine-97726.herokuapp.com/allOrders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('Deleted Successfully');
                const remaining = users.filter(allOrder => allOrder._id !== id);
                setUsers(remaining);
            }
           
        })
    }

    return (
        <Col className="all-order" xm={12} sm={12} md={6} lg={3}>
            
            <h5><b>Name: </b>{name}</h5>
            <h5><b>Address: </b>{address}</h5>
            <h5><b>Product Name: </b>{product}</h5>
            <h5><b>Phone Number: </b>{phone}</h5>
            <button onClick={ () => handleDelete(allOrder._id)} >Delete</button>
            
            
        </Col>
    );
};

export default ManageAllOrder;