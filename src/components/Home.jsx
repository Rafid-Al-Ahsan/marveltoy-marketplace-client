import React from 'react';
import About from './About';
import Banner from './Banner';
import Category from './Category';
import Gallery from './Gallery';
import Membership from './Membership';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>S-Valley | Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <About></About>
            <Category></Category>
            <Membership></Membership>
        </div>
    );
};

export default Home;