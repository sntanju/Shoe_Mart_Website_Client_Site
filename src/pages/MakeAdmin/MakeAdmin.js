import React, { useState } from 'react';
import { Alert, Col } from 'react-bootstrap';
import './MakeAdmin.css';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://frozen-ravine-97726.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }
            })

        e.preventDefault()
        }
    return (
        <Col className="admin" xm={12} sm={12} md={12} lg={12}>
             <h2 className='my-3'>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input
                    placeholder='Users Email'
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" /> <br /><br />
                <button type="submit" variant="contained" className='makeAdminSubmit'>Make Admin</button>
            </form>
            {success && <Alert variant="success">Made Admin successfully!</Alert>}
        </Col>
    );
};

export default MakeAdmin;