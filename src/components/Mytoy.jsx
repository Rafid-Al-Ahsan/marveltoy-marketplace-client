import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
// React Rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Mytoy = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/addtoy/email/${user.email}`)
            .then(response => response.json())
            .then(data => setToys(data))
    }, [])

    const handleDelete = id => {
        console.log('deleted', id);
    
        fetch(`http://localhost:5000/addtoy/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount>0) alert('deleted successfuly')
            const remaing = toys.filter(toy => toy._id !== id)
            setToys(remaing);
        })
    }

    return (
        <div>
            <p className='text-center my-5 text-xl font-bold'>Toys Added by: {user?.displayName}</p>
            <div className='w-[90%] grid sm:grid-cols-1 md:grid-cols-2 m-auto'>
                {toys.map(toy => <Card key={toy._id} toy={toy} handleDelete={handleDelete}></Card>)}
            </div>

        </div>
    );
};

export default Mytoy;

function Card({ toy, handleDelete }) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-10">
            <figure><img src={toy.photo} alt="Album" className='w-[80%] h-60' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold italic text-2xl">{toy.toyname}</h2>
                <h4 className='flex text-lg text-[#a3174f]'>Price: ${toy.price}</h4>
                <h4 className='flex text-base text-[#fff]'>Subcategory: {toy.subcategory}</h4>
                <p className='text-[#f4567e] italic'>{toy.description}</p>
                <Rating style={{ maxWidth: 120 }} readOnly value={toy.rating} className="mt-2" />
                {/* <div className="card-actions justify-start">
                   <Link to={`herodetails/${toy.id}`}><button className="btn btn-primary bg-[#a3174f] px-10 mt-7">View Details</button></Link>
                </div> */}
                <div className='flex'>
                    <Link to={`/updatetoy/${toy._id}`}><button className='bg-[#0d6efd] h-10 px-8 mr-5 font-bold'>Update</button></Link>
                    <button onClick={() => handleDelete(toy._id)} className='bg-[#dc3545] w-[20%] h-10 mr-5 font-bold'>Delete</button>
                </div>
            </div>
        </div>

    )
}