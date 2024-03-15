import React,{useState} from 'react';
import Doctorcard from './Doctocard';
import { db, storage } from '../helper/appwrite';
import searchData from '../../public/data.js';
import { IoLocationSharp } from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";

const Blogs = () => {
    const [nameQuery, setNameQuery] = useState('');
    const [specialtyQuery, setSpecialtyQuery] = useState('');
    const [districtQuery, setDistrictQuery] = useState('');

    const handleNameChange = (e) => {
        setNameQuery(e.target.value);
    };

    const handleSpecialtyChange = (e) => {
        setSpecialtyQuery(e.target.value);
    };

    const handleDistrictChange = (e) => {
        setDistrictQuery(e.target.value);
    };

    const filteredData = searchData.filter(
        (item) =>
            item.name.toLowerCase().includes(nameQuery.toLowerCase()) &&
            item.occupation.toLowerCase().includes(specialtyQuery.toLowerCase()) &&
            item.district.toLowerCase().includes(districtQuery.toLowerCase())
    );
    const [blogs, setBlogs] = React.useState([]);

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
            }
        } catch (err) {
            alert("Error in getting blogs");
            console.log(err);
        }

    }

    React.useEffect(() => {
        getBlogs();
    }, [])

    return (
        <>
            <div className='flex flex-row w-full justify-center items-center my-auto py-6' >

                <div className='flex flex-col w-1/2 gap-6'>
                    <label
                        class="mx-auto w-full relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-md focus-within:border-gray-300"
                        for="search-bar">
                        <input id="search-bar" value={nameQuery} onChange={handleNameChange} placeholder="Enter Doctor Name..." class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" />
                        <button
                            class="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">

                            <div class="relative">

                                <div
                                    class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                    <svg class="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                </div>

                                <div class="flex items-center transition-all opacity-1 valid:"><span
                                    class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                    Search
                                </span>
                                </div>

                            </div>

                        </button>
                    </label>
                    <div className='flex flex-row gap-6'>
                        <label
                            class="mx-auto  relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-md focus-within:border-gray-300"
                            for="search-bar">
                            <input id="search-bar" value={specialtyQuery} onChange={handleSpecialtyChange} placeholder="Speciality..." class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" />
                            <button
                                class="w-full md:w-auto px-6 py-3 bg-white text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">

                                <div class="relative">

                                    <div
                                        class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                        <svg class="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>
                                    </div>

                                    <div class="flex items-center transition-all opacity-1 valid:"><span
                                        class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                        <MdMedicalServices className='text-gray-700 text-2xl' />
                                    </span>
                                    </div>

                                </div>

                            </button>
                        </label>
                        <label
                            class="mx-auto   relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-md focus-within:border-gray-300"
                            for="search-bar">
                            <input id="search-bar" value={districtQuery} onChange={handleDistrictChange} placeholder="Location..." class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" />
                            <button
                                class="w-full md:w-auto px-6 py-3 bg-white text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">

                                <div class="relative">

                                    <div
                                        class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                        <svg class="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>
                                    </div>

                                    <div class="flex items-center transition-all opacity-1 valid:"><span
                                        class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                        <IoLocationSharp className='text-gray-700 text-2xl' />
                                    </span>
                                    </div>

                                </div>

                            </button>
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {blogs.length && blogs.map(blog => (<Doctorcard
                        imageUrl={blog?.image}
                        key={blog.$id}
                        name={blog?.name}
                        specialization={blog?.specialization}
                        location={blog?.location}
                        experience={blog?.experience}
                    />))}
                </div>
            </div>
        </>
    );
};

export default Blogs;
