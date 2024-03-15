import { useAuth } from '../contexts/auth-provider'
import { useNavigate } from 'react-router-dom';
import { storage, ID, db } from '../helper/appwrite'
import React from 'react'

export default function Doctordetail() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = React.useState('');
  const [image, setImage] = React.useState(null);
  const [specialization, setSpecialization] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [experience, setExperience] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const blogDetails = {
      name,
      image,
      specialization,
      location,
      experience
    };
    try {
      const file = await storage.createFile('65f438b2ad3573a58dce', ID.unique(), image);
      await db.createDocument('65f370068f6e9602ae3b', '65f434e7e77b591c6e52', ID.unique(), {
        name,
        cover: file.$id,
        specialization,
        location,
        experience
      });
      alert("doctor detail added successfully");
      navigate('/');
    } catch (err) {
      alert(err.message)
    }
  };

  const handleTitleChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setSpecialization(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };


  if (!isSignedIn) {
    navigate('/')
  }
  return <div className="container mx-auto p-8">
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="name"
          value={name}
          onChange={handleTitleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cover">
          Cover
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cover"
          type="file"
          onChange={handleImageChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Specialization
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="specialization"
          placeholder="specialization"
          value={specialization}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Location
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="location"
          placeholder="location"
          value={location}
          onChange={handleLocationChange}
        ></textarea>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Experience
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="specialization"
          placeholder="experience"
          value={experience}
          onChange={handleExperienceChange}
        ></textarea>
      </div>


      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Details
        </button>
      </div>
    </form>
  </div>
}