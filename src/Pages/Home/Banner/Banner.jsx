import React from 'react';
import { useEffect, useState, Component } from 'react';
import Loading from '../../../components/Loading/Loading';
import './Banner.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
    const [query, setQuery] = useState("beautiful");
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [photos, setPhotos] = useState([]);

    const getPhotos = async (type) => {
        let url = `https://api.pexels.com/v1/search?query=${query}`
        if (data?.next_page && type === "next") {
            url = data.next_page;
        }
        if (data.prev_page && type === "back") {
            url = data.prev_page;
        }
        setLoading(true);
        try {
            const response = await fetch(url, {
                headers: {
                    Authorization: import.meta.env.VITE_APP_YOUR_API_KEY,
                },
            });
            const res = await response.json();
            setLoading(false);
            setData(res);
            setPhotos(res.photos);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getPhotos();
    }, [query]);

    const onKeyDownHandeler = (e) => {
        if (e.keyCode === 13) {
            getPhotos();
        }
    };
console.log(photos);

    return (
        <>
            <div className='main'>
                {/* Banner section start */}
                <div className='banner-main'>
                    <div className='banner-text'>
                        <div className='center-text'>
                            <h1 className='text-white text-5xl ms-5'>Your local source of high quality images & videos directly from their creators</h1>
                            <label className="input input-bordered flex items-center gap-2 my-5">
                                <input type="text" className="grow inputSearch text-2xl" placeholder="Search photos and videos"
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={onKeyDownHandeler}
                                />

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-6 text-2xl opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                            <p className='text-white ms-5'>Recommended: summer, food, covid-19, real estate, love</p>
                        </div>
                    </div>
                </div>
                {/* Banner section end */}

                <div className='All-img rounded-lg'>
                    <h1 className='text-2xl font-bold text-start ms-12 mt-2 mb-4'>Top categories</h1>
                    {/* Top category start */}
                    <div className="banner-container">
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={20}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1, // Small devices (sm) like mobile phones
                                },
                                540: {
                                    slidesPerView: 2, 
                                },
                                768: {
                                    slidesPerView: 3, // Medium devices (md) like tablets
                                },
                                1024: {
                                    slidesPerView: 5, // Large devices (lg) like desktops
                                }
                            }}
                            className="mySwiper mb-24"
                        >
                            <SwiperSlide>
                                <img onClick={() => setQuery("Summer")} className='max-w-xs transition duration-300 ease-in-out hover:scale-110' src="https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg" alt="" />
                                <button onClick={() => setQuery("Summer")} className='text-center-car text-white font-bold text-2xl'>Summer</button>

                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => setQuery("Cat")} className='max-w-xs transition duration-300 ease-in-out hover:scale-110' src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg" alt="" />
                                <button onClick={() => setQuery("Cat")} className='text-center-car text-white text-2xl font-bold'>Cat</button>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => setQuery("City")} className='max-w-xs transition duration-300 ease-in-out hover:scale-110' src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg" alt="" />
                                <button onClick={() => setQuery("City")} className='text-center-car text-white font-bold text-2xl'>City</button>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => setQuery("Workspace")} className='max-w-xs transition duration-300 ease-in-out hover:scale-110' src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg" alt="" />
                                <button onClick={() => setQuery("Workspace")} className='text-center-car text-white font-bold text-2xl'>Workspace</button>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => setQuery("Food")} className='max-w-xs transition duration-300 ease-in-out hover:scale-110' src='https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg' alt="" />
                                <button onClick={() => setQuery("Food")} className='text-center-car text-white font-bold text-2xl'>Food</button>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => setQuery("Dog")}  className='max-w-xs transition duration-300 ease-in-out hover:scale-110' src="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg" alt="" />
                                <button onClick={() => setQuery("Dog")} className='text-center-car text-white font-bold text-2xl'>Dog</button>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => setQuery("Mountain")} className='max-w-xs transition duration-300 ease-in-out hover:scale-110' src="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg" alt="" />
                                <button onClick={() => setQuery("Mountain")} className='text-center-car text-white font-bold text-2xl'>Mountain</button>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img onClick={() => setQuery("Flower")}  className='max-w-xs transition duration-300 ease-in-out hover:scale-110' src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg" alt="" />
                                <button onClick={() => setQuery("Flower")} className='text-center-car text-white font-bold text-2xl'>Flower</button>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    {/* Top category End */}

                    {loading && <Loading></Loading>}

                    {/* All images section */}
                    <div className="cate-nav navbar-start lg:flex justify-between m-auto">
                        <ul className="menu menu-horizontal px-1">
                            <a onClick={() => setQuery("All")} className='navlink rounded-md font-semibold text-lg text-gray-500 hover:text-gray-800 text-center p-3'>All</a>
                            <a onClick={() => setQuery("photos")} className='navlink rounded-md font-semibold text-lg text-center p-3 '>Photos</a>
                            <a onClick={() => setQuery("videos")} to="" className='navlink rounded-md text-gray-500 hover:text-gray-800 font-semibold text-lg text-center p-3'> Videos</a>
                            <a onClick={() => setQuery("Freebies")} to="" className='navlink rounded-md text-gray-500 hover:text-gray-800 font-semibold text-lg text-center p-3'> Freebies</a>
                            <a onClick={() => setQuery("360")} to="" className='navlink rounded-md text-gray-500 hover:text-gray-800 font-semibold text-lg text-center p-3'>360</a>
                        </ul>
                        <div className="dropdown dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-sm mt-5">Recommanded</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-gray-800 text-white rounded-box w-52">
                                <li className='bg-gray-800 hover:bg-slate-600'><a>Most Recent</a></li>
                                <li className='bg-gray-800 hover:bg-slate-600'><a>Most Viewed</a></li>
                                <li className='bg-gray-800 hover:bg-slate-600'><a>Most Downloaded</a></li>
                                <li className='bg-gray-800 hover:bg-slate-600'><a>Most Appreciated</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='img-container m-auto gap-3'>
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
                        <button disabled={data?.page === 1} onClick={() => getPhotos("back")} className="join-item btn btn-outline bg- btn-md">Previous page</button>
                        <button onClick={() => getPhotos("next")} className="join-item btn btn-outline btn-md">Next</button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Banner;