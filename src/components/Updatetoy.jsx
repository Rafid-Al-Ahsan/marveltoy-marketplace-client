import React from 'react';
import { useLoaderData } from 'react-router-dom';

// React Tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Updatetoy = () => {

    const toy = useLoaderData();
    console.log(toy);

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const toyname2 = form.name.value;
        const sellername = form.sellername.value;
        const selleremail = form.email.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const description = form.description.value;
        // console.log(photo, toyname, sellername, selleremail, subcategory, price, quantity, rating, description);
        const updatedtoy = {photo, toyname2, sellername, selleremail, subcategory, price, quantity, rating, description} ;
        // console.log(toy);

        fetch(`https://toy-marketplace-server-drab-psi.vercel.app/addtoy/${toy._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedtoy)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0) {
                toast.success('Information updated successfully', {
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
        })

       
    }
    return (
        <div>
             <div className='w-[100%]'>
                <form onSubmit={handleUpdate} className="card-body">
                    <h4 className='text-2xl font-bold'>Update required information</h4>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" defaultValue={toy.photo} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name of toy</span>
                        </label>
                        <input type="text" name="name" placeholder="name of toy" defaultValue={toy.toyname} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellername" placeholder="seller name" value={toy.sellername} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email"  value={toy.selleremail}className="input input-bordered" required />
                    </div>
                    <div>
                        <label className='label'>
                            Select a subcategory
                        </label>
                        <select name="subcategory" className='w-[100%] p-2' defaultValue={toy.subcategory}>
                            <option value="Male SuperHero">Male SuperHero</option>
                            <option value="Villan">Villan</option>
                            <option value="Female SuperHero">Female SuperHero</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="price" defaultValue={toy.price} className="input input-bordered" 
                        step="0.01" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder="available quantity" defaultValue={toy.quantity}className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name="rating" placeholder="rating" defaultValue={toy.rating} className="input input-bordered" min="0" max="5" step="0.01" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <textarea name="description" placeholder=" description" defaultValue={toy.description} rows="7"></textarea>
                    </div>
                    <div className="form-control">
                        <div className="form-control mt-6">
                            <button className="btn bg-[#0d6efd]">Update</button>
                            <ToastContainer />
                        </div>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default Updatetoy;