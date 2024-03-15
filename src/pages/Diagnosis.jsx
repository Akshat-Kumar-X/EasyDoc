import React, { useState } from 'react';
import MedicineCard from '../components/MedicineCard';
import data from '../../public/medicines';
import { Link } from 'react-router-dom';

const Diagnosis = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTag, setSearchTag] = useState('');

  const filteredData = data.filter((medicine) => {
    const productNameMatch = medicine.productName.toLowerCase().includes(searchTerm.toLowerCase());
    const tag1Match = medicine.tag1.toLowerCase().includes(searchTag.toLowerCase());
    const tag2Match = medicine.tag2.toLowerCase().includes(searchTag.toLowerCase());
    return productNameMatch && (tag1Match || tag2Match);
  });

  return (
    <>
      <div className='flex flex-col w-full justify-center items-center bg-gradient-to-tr from-sky-300 via-sky-400 to-blue-500 bg-white rounded-lg p-10 mx-3 my-4 shadow-md'>

            <h1 className='text-5xl flex flex-col gap-2 mb-8 text-white' >
                <span>Find the <span className=' ms-1 '>best</span></span>
                <span className='ms-20'>Med <span className=' ms-3'>around you.</span></span>
            </h1>
        <div className='flex flex-row w-1/2 justify-center items-center gap-0'>
          
        <form class="flex items-center max-w-sm w-full me-2">   
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                    </svg>
                </div>
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder-gray-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Product Name..." required />
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
                <input type="text" value={searchTag} onChange={(e) => setSearchTag(e.target.value)} id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
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
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-2'>
        {filteredData.map((medicine, index) => (
          <MedicineCard
            key={index}
            productImg={medicine.productImg}
            productName={medicine.productName}
            price={medicine.price}
            tag1={medicine.tag1}
            tag2={medicine.tag2}
          />
        ))}
      </div>
    </>
  );
};

export default Diagnosis;
