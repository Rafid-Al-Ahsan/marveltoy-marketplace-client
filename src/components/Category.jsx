import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';

// React Rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const Category = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toy')
            .then(response => response.json())
            .then(data => setToys(data))
    }, [])

    const hero = toys.filter(toy => toy.type === 'Hero');
    const villan = toys.filter(toy => toy.type === 'Villan');
    const female = toys.filter(toy => toy.type === 'Female');

    return (
        <div className='w-[90%] m-auto'>
            <h2 className='text-center text-3xl mt-10 mb-5'>Shop by Category</h2>
            <h2 className='text-center text-lg 0 mb-5 italic text-[#a3174f]'>Chose your favourite Action Figure</h2>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Male SuperHero</Tab>
                    <Tab>Villan</Tab>
                    <Tab>Female SuperHero</Tab>
                </TabList>
                <TabPanel>
                    <div className='w-[100%] grid sm:grid-cols-1 md:grid-cols-2'>
                        {hero.map(toy => <Card key={toy.id} toy={toy}></Card>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="w-[100%] grid sm:grid-cols-1 md:grid-cols-2">
                        {villan.map(toy => <Card key={toy.id} toy={toy}></Card>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='w-[100%] grid sm:grid-cols-1 md:grid-cols-2'>
                        {female.map(toy => <Card key={toy.id} toy={toy}></Card>)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;

function Card({ toy }) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
            <figure><img src={toy.img} alt="Album" className='w-[85%]' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold italic text-2xl">{toy.name}</h2>
                <h4 className='flex text-lg text-[#a3174f]'>{toy.price}</h4>
                <p>{toy.description}</p>
                <Rating style={{ maxWidth: 120 }} readOnly value={toy.rating} className="mt-2" />
                <div className="card-actions justify-start">
                    <Link to={`herodetails/${toy.id}`}><button className="btn btn-primary bg-[#a3174f] px-10 mt-7">View Details</button></Link>
                </div>
            </div>
        </div>
    )
}