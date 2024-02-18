import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';  //iconify icons
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "./../firebase/firebase.config"
import { AuthContext } from '../provider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";


const Login = () => {
    const auth = getAuth(app);

    //for storing login related error msg
    const [error, setError] = useState();
    const { user } = useContext(AuthContext);

    const handleLogin = event => {

        //Collecting data from email & password field 
        setError(null);
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

            })
            .catch(error => {
                setError(error.message);
            })

    }

    const handleGoogleSignIn= () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            setError(error.message)
        })
    }


    return (
        <div>

            <div className="hero min-h-screen bg-base-200">

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <p className=' text-white-300 m-auto mt-5 font-bold text-lg'>Please Login</p>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email address</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label my-0">
                                <p>Don't have an account? <Link to="/registration" className="text-[#1d28ba]">Register</Link><br /></p>
                                <br></br>
                            </label>
                            <label className="label my-0">
                                <p className='text-center'>OR</p>
                            </label>

                            <label className="text-[#ff3232]">
                            {error}
                        </label>

                        </div>
                    </form>

                    <button onClick={handleGoogleSignIn} className='btn bg-white mb-5 text-black m-auto w-[85%]'><Icon icon="flat-color-icons:google" color="white" width="34" height="34" />  Login using Google</button>

                </div>

            </div>
        </div>
    );
};

export default Login;