import React from 'react';
import { useLoaderData } from 'react-router-dom';
// React Rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Alltoys = () => {

    const loader = useLoaderData();
    console.log(loader);

    return (
        <div>
             <p className='text-center my-5 text-xl font-bold'>Toys Added by All Users</p>
            {/* <h2>{loader.length}</h2> */}
            {/* {loader.map(toy => <p key={toy._id}>{toy.toyname} : {toy.sellername}</p>)} */}
            <div className='w-[90%] grid sm:grid-cols-1 md:grid-cols-2 m-auto'>
                {loader.map(toy => <Card key={toy._id} toy={toy}></Card>)}
            </div>

        </div>
    );
};

export default Alltoys;

function Card({ toy }) {
    return (

        <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
            <figure><img src={toy.photo} alt="Album" className='w-[80%] h-60' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold italic text-2xl">{toy.toyname}</h2>
                <h4 className='flex text-lg text-[#a3174f]'>Price: ${toy.price}</h4>
                <h4 className='flex text-base text-[#fff]'>Seller Name : {toy.sellername}</h4>
                <h4 className='flex text-base text-[#fff]'>Seller Email: {toy.selleremail}</h4>
                <h4 className='flex text-base text-[#fff]'>Subcategory: {toy.subcategory}</h4>
                <p className='text-[#f4567e] italic'>{toy.description}</p>
                <Rating style={{ maxWidth: 120 }} readOnly value={toy.rating} className="mt-2" />
                {/* <div className="card-actions justify-start">
                   <Link to={`herodetails/${toy.id}`}><button className="btn btn-primary bg-[#a3174f] px-10 mt-7">View Details</button></Link>
                </div> */}
            </div>
        </div>

    )
}