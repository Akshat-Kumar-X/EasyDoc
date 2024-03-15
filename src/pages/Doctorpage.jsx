import React, { useState, useEffect } from 'react';
import Doctorcard from './Doctocard';
import { db, storage } from '../helper/appwrite';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTag, setSearchTag] = useState('');

    const getBlogs = async () => {
        try {
            const result = await db.listDocuments('65f370068f6e9602ae3b', '65f434e7e77b591c6e52');
            if (result.total) {
                const imageIds = result.documents.map(blog => blog.cover);
                const imagePromises = imageIds.map(imageId =>
                    storage.getFileView('65f438b2ad3573a58dce', imageId)
                );
                const images = await Promise.all(imagePromises);

                const blogsData = result.documents.map((doc, index) => ({
                    ...doc,
                    image: images[index].href
                }));

                setBlogs(blogsData);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getBlogs();
    }, []);

    const filteredBlogs = blogs.filter(blog =>
        blog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.specialization.toLowerCase().includes(searchTag.toLowerCase())
    );

    return (
        <>
        <div className='flex flex-col w-full justify-center items-center  bg-gradient-to-tr from-sky-300 via-sky-400 to-blue-500 bg-white rounded-lg p-10 mx-3 my-4 shadow-md'>
            <h1 className='text-5xl flex flex-col gap-2 mb-8 text-white' >
                <span>Find the <span className='ms-1'>best</span></span>
                <span className='ms-20'>Med <span className='ms-3'>around you.</span></span>
            </h1>
            <div className='flex flex-row w-1/2 justify-center items-center gap-0'>
                <form className="flex items-center max-w-sm w-full me-2">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                            </svg>
                        </div>
                        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder-gray-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Doctor Name..." required />
                    </div>
                </form>
                <form className="flex items-center max-w-sm w-full">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                            </svg>
                        </div>
                        <input type="text" value={searchTag} onChange={(e) => setSearchTag(e.target.value)} id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search experience" required />
                    </div>
                    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-600 rounded-lg border border-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
                    {filteredBlogs.map(blog => (
                        <Doctorcard
                            imageUrl={blog.image}
                            key={blog.$id}
                            name={blog.name}
                            specialization={blog.specialization}
                            location={blog.location}
                            experience={blog.experience}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blogs;
