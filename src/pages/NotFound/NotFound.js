import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <Col className="not-found" mx={12} sm={12} md={12} lg={12}>
        <h1> <span className="first-four">4</span> <span className="zero">0</span> <span className="last-four">4</span></h1>
        <h1>Page Not Found</h1>
        <Link to="/"><button className="detail-btn">Go To Home</button></Link>
         </Col>
    );
};

export default NotFound;