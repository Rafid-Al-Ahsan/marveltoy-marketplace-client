import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, signOut, updateProfile  } from "firebase/auth";
import app from '../firebase/firebase.config';

const Registration = () => {

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const auth = getAuth(app);

    const handleRegister = (event) => {
        setSuccess('');
        setError('');
        event.preventDefault();
        const form = event.target
        const photo = form.photo.value
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setSuccess('User created sucessfully! Go to Login Page'); //display a account created mesage
                event.target.reset(); //reset the form after succesful account created 

                //insert user name and photoURL
                updateProfile(result.user, {displayName:name, photoURL: photo})
                .then(() => { })
                .catch((error) => { });

                //logout after account created    
                signOut(auth)
                    .then()
                    .catch()
            })

            .catch(error => {
                setError(error.message)
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h3 className="text-3xl font-semibold text-center mt-5 ">Please Register</h3>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="label my-0">
                            <p>Already have an account? <Link to="/login" className="text-[#1d28ba]">Login</Link><br /></p>
                        </label>

                        <label className="label my-0 text-center">
                            <p className='text-[#30bb45]'>{success}</p>
                        </label>
                        <label className="label my-0 text-center">
                            <p className='text-[#bb3030]'>{error}</p>
                        </label>
                    </div>

                </form>
            </div>

        </div>

    );
};

export default Registration;