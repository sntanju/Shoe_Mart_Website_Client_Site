import React from 'react';
import { Switch, Route, useRouteMatch, NavLink  } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddProducts from '../../AddProducts/AddProducts';
import AddReviews from '../../AddReviews/AddReviews';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders';
import MyOrders from '../../MyOrders/MyOrders';
import Payment from '../../Payment/Payment';
import './Dashboard.css';

const Dashboard = () => {

    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();

    return (
        <div className="dashboard-link">
            <div>
            
            { admin && <div>
            <NavLink to={`${url}/manageAllOrders`} ><button>Manage All Orders</button></NavLink><br /> <br />
            <NavLink to={`${url}/addproducts`}><button>Add Products</button></NavLink><br /><br />
            <NavLink to={`${url}/makeAdmin`}><button>Make Admin</button></NavLink><br /><br />
            </div>}

            { !admin && <div>
            <NavLink to={`${url}/myOrders`}><button>My Orders</button></NavLink><br /><br />
            <NavLink to={`${url}/addReviews`}><button>Reviews</button></NavLink><br /><br />
            <NavLink to={`${url}/pay`}><button>Pay</button></NavLink><br /> <br />
            </div>}
            

            <button onClick={logout}>LogOut</button>         
            </div>

                <div>
                <Switch>

                    <Route exact path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
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
                </div>
        </div>
    );
};

export default Dashboard;