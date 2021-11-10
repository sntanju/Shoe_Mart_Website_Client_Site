import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
       setPassword(e.target.value);
    }
    
    
    return (
        <div className="login bg-success text-light" >
            <h2>Please Sign In</h2>
            <br />
            <label htmlFor="email">Your Email:  </label>
                <input onBlur={handleEmailChange} type="text" name="email" required />
                <br />

                <label htmlFor="password">Your Password:</label>
                <input onBlur={handlePasswordChange} type="password" name="password" required/>
                <br /><br />
                <button className="login-button">Login</button>
            <br /><br /><br />
            <h5>Don't have an account?</h5>
            <br />
            <NavLink to="/register"><button className="login-button" >Please Register</button></NavLink>
        </div>
    );
};

export default Login;