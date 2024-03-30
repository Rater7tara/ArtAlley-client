import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import './NavBar.css';
import logo from '../../../assets/logo.png'

const NavBar = () => {
    const navOptions =
        <>
            <Link to="" className='rounded-md font-semibold text-gray-400 hover:text-gray-800 text-center p-3'>Explore</Link>
            <Link to="" className='navlink rounded-md text-gray-400 hover:text-gray-800 font-semibold  text-center p-3 '>Discover</Link>
            <Link to="" className='navlink rounded-md text-gray-400 hover:text-gray-800 font-semibold  text-center p-3'>For Professionals</Link>
            <div className="dropdown dropdown-hover text-gray-400 hover:text-gray-800 hidden md:block">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-gray-800 text-gray-300 hidden md:block">
                    <li className='bg-gray-800 hover:bg-gray-700'><a>About ArtAlley</a></li>
                    <li className='bg-gray-800 hover:bg-gray-700'><a>Pricing</a></li>
                    <li className='bg-gray-800 hover:bg-gray-700'><a>Licence</a></li>
                    <li className='bg-gray-800 hover:bg-gray-700'><a>Partnerships</a></li>
                    <li className='bg-gray-800 hover:bg-gray-700'><a>Blog</a></li>
                    <li className='bg-gray-800 hover:bg-gray-700'><a>Help</a></li>
                    <li className='bg-gray-800 hover:bg-gray-700'><a>Join The Team</a></li>
                    <li className='border-t-2 border-gray-400'>
                        <nav>
                            <div className="grid grid-flow-col gap-4 py-2">
                                <a><FaTwitter className='social text-orange-600'></FaTwitter></a>
                                <a><FaYoutube className='social text-orange-600'></FaYoutube></a>
                                <a><FaFacebook className='social text-orange-600'></FaFacebook></a>
                                <a><FaInstagram className='social text-orange-600'></FaInstagram></a>
                                <a><FaGithub className='social text-orange-600'></FaGithub></a>
                            </div>
                        </nav>
                    </li>
                </ul>
            </div>
            <button className="btn btn-outline btn-sm text-gray-400 ms-2 me-4 mt-2 ">Submit Photo</button>
            <div className='lg:border-s-2 border-gray-200 px-4'>
                <button className="btn bg-white text-gray-400 btn-sm me-2 mt-2 border-none">Login</button>
                <button className="btn bg-orange-600 text-white btn-sm mt-2">Join Free</button>
            </div>
        </>


    return (
        <div className="navbar bg-base-navbar max-w-screen-2xl  text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost bg-orange-300 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost text-2xl text-orange-600 font-bold ms-4"><img className='logo' src={logo} alt="" /> ArtAlley</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>

            </div>

        </div>
    );
};

export default NavBar;