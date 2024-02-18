import React from 'react';
import About from './About';
import Banner from './Banner';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <About></About>
        </div>
    );
};

export default Home;