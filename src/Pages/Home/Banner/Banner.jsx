import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Loading from '../../../components/Loading/Loading';
import './Banner.css';
import { Link } from 'react-router-dom';



const Banner = () => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [slide, setSlide] = useState([]);

    const getPhotos = async (type) => {

        let url = `https://api.pexels.com/v1/search?query=${query}`
        if (data?.next_page && type === "next") {
            url = data.next_page;
        }

        if (data.prev_page && type === "back") {
            url = data.prev_page;
        }
        setLoading(true);
        await fetch(url,
            {
                headers: {
                    Authorization: "R240G2wblUJchdIAlxAcpnqoJANX9h3SorOncFoqhQWlmwMMO03LVSEO",
                },
            })
            .then((resp) => { return resp.json() })
            .then((res) => {
                setLoading(false);
                setData(res);

                setPhotos(res.photos)
            });
    };

    useEffect(() => {
        getPhotos();
    }, []);

    const onKeyDownHandeler = (e) => {
        if (e.keyCode === 13) {
            getPhotos();
        }
    };



    return (
        <>
            <div className='main'>
                <div className='banner-main'>
                    <div className='banner-text'>
                        <div className='center-text'>
                            <h1 className='text-white text-5xl ms-5'>Your local source of high quality images videos directly from their creators</h1>
                            <label className="input input-bordered flex items-center gap-2 my-5">
                                <input type="text" className="grow inputSearch text-2xl" placeholder="Search photos and videos"
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={onKeyDownHandeler}
                                    value={query}

                                />

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-6 text-2xl opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>

                            </label>

                            <p className='text-white ms-5'>Recommended: summer, food, covid-19, real estate, love</p>
                        </div>

                    </div>
                </div>
                {loading && <Loading></Loading>}
                <div className='All-img'>
                    <h1 className='text-2xl font-bold text-start ms-12 mt-2'>Top categories</h1>
                    <div className="cate-nav navbar-start hidden lg:flex justify-between ms-12">
                        <ul className="menu menu-horizontal px-1">
                            <Link to="" className='rounded-md font-semibold text-lg text-gray-500 hover:text-gray-800 text-center p-3'>All</Link>
                            <Link to="" className='navlink rounded-md text-gray-500 hover:text-gray-800 font-semibold text-lg text-center p-3 '>Photos</Link>
                            <Link to="" className='navlink rounded-md text-gray-500 hover:text-gray-800 font-semibold text-lg text-center p-3'> Videos</Link>
                            <Link to="" className='navlink rounded-md text-gray-500 hover:text-gray-800 font-semibold text-lg text-center p-3'> Freebies</Link>
                            <Link to="" className='navlink rounded-md text-gray-500 hover:text-gray-800 font-semibold text-lg text-center p-3'>360</Link>
                        </ul>
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1">Recommanded</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Most Recent</a></li>
                                <li><a>Most Viewed</a></li>
                                <li><a>Most Downloaded</a></li>
                                <li><a>Most Appreciated</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='img-container gap-6'>
                        {
                            photos?.map((item, index) => {
                                return (
                                    <div className='box' key={index}>
                                        <img className='box-img' src={item.src.medium} alt={item.id} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="join grid grid-cols-2 join-btn">
                        <button disabled={data?.page === 1} onClick={() => getPhotos("back")} className="join-item btn btn-outline btn-md">Previous page</button>
                        <button onClick={() => getPhotos("next")} className="join-item btn btn-outline btn-md">Next</button>
                    </div>
                </div>
            </div>









        </>

    );
};

export default Banner;