import React, { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://frozen-ravine-97726.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    } , [] );

    return (
        <div>
             <h4 style={{marginLeft: '300px', color: 'red'}}>My Orders</h4>
           <div >
           {
                    allOrders.map(allOrder => <MyOrder
                    key = {allOrder._id}
                    allOrder={allOrder}
                    ></MyOrder>)
            }
           </div>
        </div>
    );
};

export default MyOrders;