import { faBacon, faExchangeAlt, faHeadphones, faPlane, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from "react-bootstrap";
import React from 'react';
import './ExtraFacilities.css';

const ExtraFacilities = () => {

        const planeIcon = <FontAwesomeIcon icon={faPlane} />  
        const headphoneIcon = <FontAwesomeIcon icon={faHeadphones} />
        const exchangeIcon = <FontAwesomeIcon icon={faExchangeAlt} />
        const baconIcon = <FontAwesomeIcon icon={faBacon} />

    return (

        <Container fluid>

            <Row className="facilities" >

            <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                <h2 className="text-info">Our Extra Facilities For You</h2>
                <p className="text-success"> Our company makes different types of extra facilities for the client. Our customer<br/> will get free delivery service, various discounts in various time, returns of<br/> products. Also they will get a large collection for choose.</p>
                </Col>
            </Row>

                <Row  className="facility">   

                <Col xs={12} sm={12} md={6} lg={3} className="single-facility">          
                    <p className="text-danger">{planeIcon} </p>
                    <p className="text-success">Free Delivery</p>                    
                </Col>
                
                <Col xs={12} sm={12} md={6} lg={3} className="single-facility">                
                    <p className="text-danger">{headphoneIcon}</p>
                    <p className="text-success">Clients Discount</p> 
                </Col>

                <Col xs={12} sm={12} md={6} lg={3} className="single-facility">            
                    <p className="text-danger">{exchangeIcon}</p>                    
                    <p className="text-success">Returns Of Good</p>           
                </Col>

                <Col xs={12} sm={12} md={6} lg={3} className="single-facility">                
                    <p className="text-danger"> {baconIcon}</p>
                    <p className="text-success">Many Brands</p>                               
                </Col>

            </Row>
        </Row>
        </Container>

    );
};

export default ExtraFacilities;