import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

// React Tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';


const Addtoy = () => {

    const { user } = useContext(AuthContext);

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const toyname = form.name.value;
        const sellername = form.sellername.value;
        const selleremail = form.email.value;
        const subcategory = form.subcategory.value;
        const price = parseFloat(form.price.value);
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const description = form.description.value;
        // console.log(photo, toyname, sellername, selleremail, subcategory, price, quantity, rating, description);
        const toy = {photo, toyname, sellername, selleremail, subcategory, price, quantity, rating, description} ;
        console.log(toy);

        fetch('https://toy-marketplace-server-drab-psi.vercel.app/addtoy',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(toy)
        })
        .then(response => {response.json()})
        .then(data => console.log(data))
        form.reset();

        toast.success('Toy added successfully', {
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

    return (
        <div>
            <Helmet>
                <title>S-Valley | Addtoy</title>
            </Helmet>

            <div className='w-[100%]'>
                <form onSubmit={handleAddToy} className="card-body">
                    <h4 className='text-2xl font-bold'>Please add a toy</h4>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name of toy</span>
                        </label>
                        <input type="text" name="name" placeholder="name of toy" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellername" placeholder="seller name" value={user?.displayName} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" value={user?.email} className="input input-bordered" required />
                    </div>
                    <div>
                        <label className='label'>
                            Select a subcategory
                        </label>
                        <select name="subcategory" className='w-[100%] p-2' >
                            <option value="Male SuperHero">Male SuperHero</option>
                            <option value="Villan">Villan</option>
                            <option value="Female SuperHero">Female SuperHero</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="price" className="input input-bordered" 
                        step="0.01" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder="available quantity" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name="rating" placeholder="rating" className="input input-bordered" min="0" max="5" step="0.01" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <textarea name="description" placeholder=" description" rows="7"></textarea>
                    </div>
                    <div className="form-control">
                        <div className="form-control mt-6">
                            <button className="btn bg-[#a3174f]">Submit</button>
                            <ToastContainer />
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default Addtoy;