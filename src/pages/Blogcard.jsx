import React from 'react';

const Blogcard = ({ imageLink, name, description }) => {
  return (
    <div className="bg-orange-500 rounded-lg shadow-md overflow-hidden text-black flex flex-col justify-center blog-container">
      <img src={imageLink} alt={name} className="w-full h-48 object-cover object-center" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="mb-4">{description}</p>
        <button className='btn'>Explore</button>
      </div>
    </div>
  );
};

export default Blogcard;
