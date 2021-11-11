import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {

    const {user, logout} = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sm={12} xs={12}>
            <Container>
                
                <Navbar.Brand ><img className= "logo" src="https://www.designfreelogoonline.com/wp-content/uploads/2021/02/000764-Shoes-02.png" alt="" /></Navbar.Brand>
                <Navbar.Brand > Shoe Mart </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>

                    <Nav className="link-style">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/allproducts">Products</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/register">Register</NavLink>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        {user?.email ? 
                        <button className="bg-info link-style" onClick={logout}>LogOut</button>: 
                        <NavLink className="bg-info link-style" to="/login">Login</NavLink> 
                        }
                            <Navbar.Text>
                                <p className="text-lignt m-3">{user?.displayName}</p>
                            </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;