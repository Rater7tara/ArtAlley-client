import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-main'>
            <div className='banner-text'>
                <div className='center-text'>
                <h1 className='text-white text-5xl ms-5'>Your local source of high quality images videos directly from their creators</h1>
                <label className="input input-bordered flex items-center gap-2 my-5">
                    <input type="text" className="grow text-2xl" placeholder="Search photos and videos" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-6 text-2xl opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>

                <p className='text-white ms-5'>Recommended: summer, food, covid-19, real estate, love</p>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;