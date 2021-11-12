import React, { useState, useEffect } from 'react';
import ManageAllOrder from '../MaanageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://frozen-ravine-97726.herokuapp.com/allOrders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    } ,[allOrders]);



    return (
        <div>
            <h4 style={{marginLeft: '300px'}}>Order Of All The Customer</h4>
           <div >
           {
                    allOrders.map(allOrder => <ManageAllOrder
                    key = {allOrder._id}
                    allOrder={allOrder}
                    ></ManageAllOrder>)
            }
           </div>
        </div>
    );
};

export default ManageAllOrders;