import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';
// React Rating
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
// React Tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';

const Mytoy = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetchToys();
    }, []);

    const fetchToys = async () => {
        const response = await fetch(`https://toy-marketplace-server-drab-psi.vercel.app/addtoy/email/${user.email}`);
        const data = await response.json();
        setToys(data);
    };

    const handleDelete = async (id, name) => {

        const result = confirm(`Are you sure you want to delete this item ${name}`);

        if (result === true) {
            const response = await fetch(`https://toy-marketplace-server-drab-psi.vercel.app/addtoy/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            console.log(data);

            if (data.deletedCount > 0) {
                // delete from database code
                const remaining = toys.filter((toy) => toy._id !== id);
                setToys(remaining);

                // Nothing complicated just react tostify code 
                // React toastify
                toast.success(`${name} deleted successfully`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setDisable(true);
            }
        }
    };

    const handleSort = async (sortOrder) => {
        let response;
        if (sortOrder === 'ascending') {
            response = await fetch(`https://toy-marketplace-server-drab-psi.vercel.app/addtoy/email/ascending/${user.email}`);
        } else if (sortOrder === 'descending') {
            response = await fetch(`https://toy-marketplace-server-drab-psi.vercel.app/addtoy/email/descending/${user.email}`);
        }
        else if (sortOrder === 'default') {
            response = await fetch(`https://toy-marketplace-server-drab-psi.vercel.app/addtoy/email/${user.email}`);
        }
        const data = await response.json();
        setToys(data);
    };

    return (
        <div>
            <Helmet>
                <title>S-Valley | Mytoy</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <p className='text-center my-5 text-xl font-bold'>Toys Added by: {user?.displayName}</p>
            <div className='flex w-[95%] m-auto'>
                <div className='w-[15%]'>
                    <h1 className='text-xl'>Sort by Price</h1>
                    <form>
                        <input type="radio" id="ascending" name="sortOrder" value="ascending" onChange={() => handleSort('ascending')} />
                        <label htmlFor="ascending"> Ascending</label><br />
                        <input type="radio" id="descending" name="sortOrder" value="descending" onChange={() => handleSort('descending')} />
                        <label htmlFor="descending"> Descending</label><br />
                        <input type="radio" id="default" name="sortOrder" value="default" onChange={() => handleSort('default')} />
                        <label htmlFor="default"> Default</label><br />
                    </form>
                </div>
                <div className='w-[85%] grid sm:grid-cols-1 md:grid-cols-2 m-auto'>
                    {toys.map(toy => <Card key={toy._id} toy={toy} handleDelete={handleDelete}></Card>)}
                    <ToastContainer />
                </div>
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
                <div className='flex'>
                    <Link to={`/updatetoy/${toy._id}`}><button className='bg-[#0d6efd] h-10 px-8 mr-5 font-bold'>Update</button></Link>
                    <button onClick={() => handleDelete(toy._id, toy.toyname)} className='bg-[#dc3545] px-8 h-10 mr-5 font-bold'>Delete</button>
                </div>
            </div>
        </div>
    )
}