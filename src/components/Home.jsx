import React from 'react';
import About from './About';
import Banner from './Banner';
import Category from './Category';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <About></About>
            <Category></Category>
        </div>
    );
};

export default Home;