import React, { useState, useEffect } from 'react';
import Doctorcard from './Doctocard';
import { db, storage } from '../helper/appwrite';
import searchData from '../../public/data.js';
import { IoLocationSharp } from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";

const Blogs = () => {
    const [nameQuery, setNameQuery] = useState('');
    const [specialtyQuery, setSpecialtyQuery] = useState('');
    const [locationQuery, setLocationQuery] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const result = await db.listDocuments('65f370068f6e9602ae3b', '65f434e7e77b591c6e52');
                if (result.total) {
                    const imageIds = result.documents.map(blog => blog.cover);
                    const imagePromises = imageIds.map(imageId =>
                        storage.getFileView('65f438b2ad3573a58dce', imageId)
                    );

                    const images = await Promise.all(imagePromises);

                    const blogs = result.documents.map((doc, index) => ({
                        ...doc,
                        image: images[index].href // assuming images[index] now contains the resolved file object with an href property
                    }));

                    setBlogs(blogs);
                    setFilteredBlogs(blogs); // Set filteredBlogs initially to all blogs
                }
            } catch (err) {
                alert("Error in getting blogs");
                console.log(err);
            }
        };

        getBlogs();
    }, []);

    const handleNameChange = (e) => {
        const { value } = e.target;
        setNameQuery(value);
        filterBlogs(value, specialtyQuery, locationQuery);
    };

    const handleSpecialtyChange = (e) => {
        const { value } = e.target;
        setSpecialtyQuery(value);
        filterBlogs(nameQuery, value, locationQuery);
    };

    const handleLocationChange = (e) => {
        const { value } = e.target;
        setLocationQuery(value);
        filterBlogs(nameQuery, specialtyQuery, value);
    };

    const filterBlogs = (name, specialty, location) => {
        const filtered = blogs.filter((blog) =>
            blog.name.toLowerCase().includes(name.toLowerCase()) &&
            blog.specialization.toLowerCase().includes(specialty.toLowerCase()) &&
            blog.location.toLowerCase().includes(location.toLowerCase())
        );
        setFilteredBlogs(filtered);
    };

    return (
        <>  
            <div className='flex flex-col w-full justify-center items-center bg-gradient-to-tr  from-sky-300 via-sky-400 to-blue-500 bg-white rounded-lg p-10 mx-3 my-4 shadow-md'>

                <h1 className='text-5xl flex flex-col gap-2 mb-8 text-white' >
                    <span>Find the <span className=' ms-1 font-semibold'>best</span></span>
                    <span className='ms-20'>Doctor <span className=' ms-3  font-semibold'>around you.</span></span>
                </h1>
                <div className='flex flex-row w-3/4 justify-center items-center gap-0'>

                    <form class="flex items-center max-w-sm w-full me-2">   
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                            </svg>
                        </div>
                        <input type="text"  value={nameQuery} onChange={handleNameChange} placeholder="Search by Doctor Name..." id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder-gray-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    </form>

                    <form class="flex items-center max-w-sm w-full">   
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                            </svg>
                        </div>
                        <input type="text" value={specialtyQuery} onChange={handleSpecialtyChange} placeholder="Search by Speciality..." id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    </form>

                    <form class="flex items-center max-w-sm w-full ms-2">   
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                            </svg>
                        </div>
                        <input type="text" value={locationQuery} onChange={handleLocationChange} placeholder="Search by Location..." id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-600 rounded-lg border border-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                    </form>

                </div>


                </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredBlogs.map(blog => (
                    <Doctorcard
                        imageUrl={blog?.image}
                        key={blog.$id}
                        name={blog?.name}
                        specialization={blog?.specialization}
                        location={blog?.location}
                        experience={blog?.experience}
                    />
                ))}
            </div>
        </>
    );
};

export default Blogs;
