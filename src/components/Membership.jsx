import React, { useEffect, useState } from 'react';

const Membership = () => {

    const [membership, setMembership] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/membership')
            .then(res => res.json())
            .then(data => setMembership(data))
    }, [])

    return (
        <div>
            <div className="w-[90%] m-auto">
                <h2 className='text-3xl text-center'>Membership</h2>
                <h2 className='text-2xl text-center mt-5 mb-10 text-[#a3174f]'>Grab Our Membership Card to Collect Reward Points and win Exciting Gifts</h2>
                <div className="flex gap-x-5 m-auto">
                    {membership.map(cardtype => <Card key={cardtype.id} cardtype={cardtype}></Card>)}
                </div>
            </div>
        </div>
    );
};

export default Membership;

function Card({ cardtype }) {
    return (
        <div className='m-auto'>
            <div className="card w-[100%] bg-[#151111] #shadow-xl rounded-lg">
                <figure><img src={cardtype.img} alt="Shoes" className='' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{cardtype.type}</h2>
                    <h3 className='text-lg text-[#a3174f]'>Price: {cardtype.price}</h3>
                    <p>{cardtype.descriptiop}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary bg-[#a3174f] mt-4">Get Membership!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}