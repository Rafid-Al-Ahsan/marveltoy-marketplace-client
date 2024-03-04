import React from 'react';
import { useLoaderData } from 'react-router-dom';

//ratings icon
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const HeroDetails = () => {

    const hero = useLoaderData();
    const { id, name, img, type, price, rating, description, details, actor, actorimg } = hero;



    return (
        <div>
            <div className='flex w-[90%] mt-10 gap-x-10 m-auto '>
                <div className='w-[70%]'>
                    <div className="card w-[100%] bg-red-900 shadow-xl rounded">
                        <div className="card-body">
                            <h2 className="card-title font-bold text-2xl">{name}</h2>
                            <p>{details}</p>
                            <p className='flex font-bold text-lg'>Ratings:<Rating style={{ maxWidth: 120 }} readOnly value={rating} className="" /></p>
                            <p className='flex font-bold text-lg'>Price: {price}</p>
                            <figure className='w-[20%]'><img src={img} alt="Shoes" /></figure>
                            <p className='flex font-bold text-lg'>Actor/Actress brought {name} to life on big screen</p>
                            <p className='italic text-lg'>{actor}</p>
                            <div className="card-actions justify-end">
                                <button className="btn ">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-96 shadow-xl rounded bg-[#100f0f] h-[50%]">
                    <figure><img src={actorimg} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{actor} ({name})</h2>
                        <p>{description}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroDetails;