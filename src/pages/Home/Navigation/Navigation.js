import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                
                <Navbar.Brand ><img className= "logo" src="https://www.designfreelogoonline.com/wp-content/uploads/2021/02/000764-Shoes-02.png" alt="" /></Navbar.Brand>
                <Navbar.Brand > Shoe Mart </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>

                    <Nav className="link-style">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;