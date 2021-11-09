import React from 'react';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;