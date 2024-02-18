import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; //for highlighting active route

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        {/* Small device responsive links */}
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                            <li><NavLink to="/alltoy" activeClassName="active">All Toys</NavLink></li>
                            <li><NavLink to="/mytoy" activeClassName="active">My Toys</NavLink></li>
                            <li><NavLink to="/addtoy" activeClassName="active">Add A Toy</NavLink></li>
                            <li><NavLink to="" activeClassName="active">Blog</NavLink></li>
                        </ul>
                    </div>
                    {/* Logo title */}
                    <h1 className="text-3xl font-bold p-2 ml-10 text-[#fff] bg-[#cb191f]">S-VALLEY</h1>
                </div>
                {/* Large device responsive links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-bold text-lg'><NavLink exact to="/" activeClassName="active text-xl" className="my-link">Home</NavLink></li>
                        <li className='font-bold text-lg'><NavLink to="/alltoy" activeClassName="active">All Toys</NavLink></li>
                        <li className='font-bold text-lg'><NavLink to="/mytoy" activeClassName="active">My Toys</NavLink></li>
                        <li className='font-bold text-lg'><NavLink to="/addtoy" activeClassName="active">Add A Toy</NavLink></li>
                        <li className='font-bold text-lg'><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                    </ul>
                </div>



                <div className="navbar-end">
                    {/* displays user image if logged in */}
                    <img
                        src=""
                        alt="Profile Photo"
                        className='mx-5 rounded-full'
                        style={{ width: "3rem", height: "3rem" }}
                        title=""
                    />
                    {/* Login and Logout button */}
                    <Link to='login' className="btn bg-[#a3174f] px-8 rounded-full font-bold text-lg mr-10">Login</Link>
                </div>

            </div>

        </div>
    );
};

export default Navbar;