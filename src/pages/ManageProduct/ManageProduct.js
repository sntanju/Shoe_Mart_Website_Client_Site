import React, {useState, useEffect } from 'react';
import './ManageProduct.css';

const ManageProduct = ({product}) => {

    const {id, description, name, img, price} = product || {};
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
                const remaining = users.filter(product => product._id !== id);
                setUsers(remaining);
            }
           
        })
    }

    return (
        <div className="manage-product">
           <img src={img} alt="" />
            <div className="product-info">
            <h2>{name}</h2>
            <p className="p-2">{description}</p>
            <h4><b>Price: ${price}</b></h4>
            <button onClick={ () => handleDelete(product._id)}  > Delete </button>
            </div>
        </div>
    );
};

export default ManageProduct;