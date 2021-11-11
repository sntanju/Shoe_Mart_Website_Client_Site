import React from 'react';
import ExtraFacilities from '../ExtraFacilities/ExtraFacilities';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Products></Products>
            <ExtraFacilities></ExtraFacilities>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;