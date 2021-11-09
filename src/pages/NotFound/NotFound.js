import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
        <h1> <span className="first-four">4</span> <span className="zero">0</span> <span className="last-four">4</span></h1>
        <h1>Page Not Found</h1>
        <Link to="/"><button className="detail-btn">Go To Home</button></Link>
    </div>
    );
};

export default NotFound;