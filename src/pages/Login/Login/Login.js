import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser,  isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    
    return (
       <Container>
           <Row>
               <Col xs={0} sm={0} md={0} lg={3}></Col>
               <Col xs={12} sm={12} md={12} lg={6} className="login text-light my-3">
    
                    <h2>Please Sign In</h2>
                    <br />
                    <form onSubmit={handleLoginSubmit}>
                    <label htmlFor="email">Your Email:  </label>
                    <input onBlur={handleOnChange} type="text" name="email" required />
                    <br />

                    <label htmlFor="password">  Your Password:</label>
                    <input onBlur={handleOnChange} type="password" name="password" required/>
                    <br />
                    
                    <button className="login-button" type='submit'>Login</button><br/>
                    <NavLink to="/register"><button className="login-button" >Don't have an account? Register</button></NavLink>
                    {isLoading && <Spinner animation="border" varient='success' />} <br/>
                    {user?.email && 
                    <Alert variant="success">
                    Login Successfully!!
                    </Alert>}
                    {authError && <Alert variant="danger">{authError}</Alert>}
                    </form>
                          
               </Col>
               <Col xs={0} sm={0} md={0} lg={3}></Col>
           </Row>
       </Container>
    );
};

export default Login;