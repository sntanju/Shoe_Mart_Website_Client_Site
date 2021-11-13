import { NavLink, useHistory } from 'react-router-dom';
import { Alert, Spinner } from 'react-bootstrap';
import React, { useState } from 'react';
import './Register.css';
import useAuth from '../../../hooks/useAuth';


const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
        

    return (
        <div className="register bg-success text-light">
            { !isLoading && <form onSubmit={handleLoginSubmit}>
                <h3>Please Register</h3>
                <br />

                <label htmlFor="name">Your Name:  </label> 
                <input onBlur={handleOnBlur} type="text" name="name"  />
                <br />

                <label htmlFor="email">Your Email:  </label>
                <input onBlur={handleOnBlur}type="text" name="email"  />
                <br />

                <label htmlFor="password">Your Password:</label>
                <input onBlur={handleOnBlur} type="password" name="password" />
                <br />
                
                <label htmlFor="password">Re Write Your Password:</label>
                <input onBlur={handleOnBlur} type="password" name="password2" />
                <br /><br />
                

                <button type="submit" className="register-button">Register</button>
                <br />
                
                <br /> 
                <NavLink to="/login"><button className="register-button">Already Registered? Login</button></NavLink>
            </form>}

            { isLoading && <Spinner animation="border" varient='success' /> } <br />
                {user?.email && 
                        <Alert variant="success">
                        Register Successfully!!
                        </Alert>}
                        {/* {authError && <Alert variant="danger">{authError}</Alert>} */}
            
        </div>
    );
};

export default Register;