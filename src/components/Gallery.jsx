import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://toy-marketplace-server-drab-psi.vercel.app/toy')
            .then(response => response.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div>
            <div className='w-[90%] m-auto'>
                <h3 className='text-lg italic mt-10 mb-2'>-Our Action Figures</h3>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
                    {toys.map(toy => <Card key={toy.id} toy={toy}></Card>)}
                </div>
            </div>
        </div>
    );
};

export default Gallery;

function Card({ toy }) {
    return (
        <div className="card card-compact w-60 bg-base-100 shadow-xl mx-2">
            <figure><img src={toy.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toy.name}</h2>
            </div>
        </div>
    )
}