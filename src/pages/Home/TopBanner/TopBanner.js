import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div>
            <h2 className="web-name ">Welcome To Shoe Mart</h2>
            <Container fluid>
                
                <Row className="top-banner">
                    <Col xs={12} md={6} lg={6}>
                        <img src="https://media.istockphoto.com/photos/great-sneaker-picture-id1079117394?k=20&m=1079117394&s=612x612&w=0&h=rUuc5v_-8uckfumKljOD0RkgfPtRWcV0c8n2MI1BS6w=" alt="" />
                    </Col>
                    <Col xs={12} lg={6} md={6}>
                        <h2>Choose The Best Shoe </h2>
                        <p>Here you will get the most beautiful, latest and the popular shoes of<br/> the world.So come here and buy the shoe as you like.<br/> We maintain the quality of our products.</p>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default TopBanner;