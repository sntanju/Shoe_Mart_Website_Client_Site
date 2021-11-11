import { faBacon, faExchangeAlt, faHeadphones, faPlane, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ExtraFacilities.css';

const ExtraFacilities = () => {
        const planeIcon = <FontAwesomeIcon icon={faPlane} />  
        const headphoneIcon = <FontAwesomeIcon icon={faHeadphones} />
        const exchangeIcon = <FontAwesomeIcon icon={faExchangeAlt} />
        const baconIcon = <FontAwesomeIcon icon={faBacon} />
    return (
        <div className="facilities" >
            <h2 className="text-info">Our Extra Facilities For You</h2>
            <p> Our company makes different types of extra facilities for the client. Our customer<br/> will get free delivery service, various discounts in various time, returns of<br/> products. Also they will get a large collection for choose.</p>

            <div  className="facility">                
                <div className="single-facility">
                    <p className="text-danger">{planeIcon} </p>
                    <p className="text-success">Free Delivery</p>                    
                </div>
                <div className="single-facility">
                    <p className="text-danger">{headphoneIcon}</p>
                    <p className="text-success">Clients Discount</p>
                </div>
                <div className="single-facility">
                    <p className="text-danger">{exchangeIcon}</p>                    
                    <p className="text-success">Returns Of Good</p>
                </div>
                <div className="single-facility">
                    <p className="text-danger"> {baconIcon}</p>
                    <p className="text-success">Many Brands</p>                  
                </div>
                
            </div>
        </div>
    );
};

export default ExtraFacilities;