import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import { Alert, Spinner } from 'react-bootstrap';

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
        <div className="login bg-success text-light" >
            <h2>Please Sign In</h2>
            <br />
            <form onSubmit={handleLoginSubmit}>
            <label htmlFor="email">Your Email:  </label>
                <input onBlur={handleOnChange} type="text" name="email" required />
                <br />

                <label htmlFor="password">Your Password:</label>
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
            
            
                   
        </div>
    );
};

export default Login;