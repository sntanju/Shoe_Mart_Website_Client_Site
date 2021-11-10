import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { NavLink } from 'react-router-dom';

import React, { useState } from 'react';
import './Register.css';


const Register = () => {

    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [login, setLogin] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
       setPassword(e.target.value);
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        

        if (password.length < 6) {
            setError("Password Can't be Less Than 6 Characters.")
            return;
        }

        login ? processLogin(email, password) : createNewUser(email, password);
       
    }

        const processLogin = (email, password) => {
            signInWithEmailAndPassword(auth, email, password)
            
            .then(result => {
                
                const user = result.user;
                setError('');
                

            })
            .catch(error => {
                setError(error.message);
            })
        }

       const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
           
            setError('')
        })
        .catch(error => {
            setError(error.message);
        })
       }
        

    return (
        <div className="register bg-success text-light">
            <form onSubmit={handleRegistration}>
                <h3>Please Register</h3>
                <br />

                <label htmlFor="name">Your Name:  </label>
                <input type="text" name="name" required />
                <br />

                <label htmlFor="email">Your Email:  </label>
                <input onBlur={handleEmailChange} type="text" name="email" required />
                <br />

                <label htmlFor="password">Your Password:</label>
                <input onBlur={handlePasswordChange} type="password" name="password" required/>
                <br /><br />

                <button className="register-button">Register</button>
                <br />
                
                <h5>Already Registered?</h5> <br /> 
                <NavLink to="/login"><button className="register-button">Please Login</button></NavLink>
                <br />
                <h5>{error}</h5>
                
            </form>
        </div>
    );
};

export default Register;