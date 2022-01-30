import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Switch, Route, useRouteMatch, NavLink  } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddProducts from '../../AddProducts/AddProducts';
import AddReviews from '../../AddReviews/AddReviews';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../../ManageProducts/ManageProducts';
import MyOrders from '../../MyOrders/MyOrders';
import Payment from '../../Payment/Payment';
import './Dashboard.css';

const Dashboard = () => {

    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();

    return (
        <Container className="dashboard-link">
            <Row>
            
            { admin && <Col >
            <NavLink to={`${url}/manageAllOrders`} xm={12} sm={12} md={2} lg={2} ><button  className=" mx-2 my-2 ">Manage All Orders</button></NavLink>
            <NavLink to={`${url}/manageProducts`}  xm={12} sm={12} md={2} lg={2}><button className=" mx-2 my-2">Manage Product</button></NavLink>
            <NavLink to={`${url}/addproducts`}  xm={12} sm={12} md={2} lg={2}><button className=" mx-2 my-2">Add Products</button></NavLink>
            <NavLink to={`${url}/makeAdmin`}  xm={12} sm={12} md={2} lg={2}><button className=" mx-2 my-2">Make Admin</button></NavLink>
            </Col>}

            { !admin && <Col xm={8} sm={8} md={8} lg={8} >
            <NavLink to={`${url}/myOrders`}><button className=" mx-2 ">My Orders</button></NavLink>
            <NavLink to={`${url}/addReviews`}><button className=" mx-2 ">Reviews</button></NavLink>
            <NavLink to={`${url}/pay`}><button className=" mx-2 ">Pay</button></NavLink>
            </Col>}
            
            <Col xm={4} sm={4} md={4} lg={4}>
            <button  className=" my-2 " onClick={logout}>LogOut</button>  
            </Col>
                
            </Row>

                <Col>
                <Switch>

                    <Route exact path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route exact path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route exact path={`${path}/addproducts`}>
                        <AddProducts></AddProducts>
                    </Route>
                    <Route exact path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>

                    <Route exact path={`${path}/addReviews`}>
                        <AddReviews></AddReviews>
                    </Route>
                    <Route exact path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/pay`}>
                        <Payment></Payment>
                    </Route>

                </Switch>
                </Col>
        </Container>
    );
};

export default Dashboard;
