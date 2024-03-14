import { useAuth } from '../contexts/auth-provider'
import { useNavigate } from 'react-router-dom';
import { storage, ID, db } from '../helper/appwrite'
import React from 'react'

export default function AddBlog() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const [title, setTitle] = React.useState('');
  const [image, setImage] = React.useState(null);
  const [description, setDescription] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const blogDetails = {
      title,
      image,
      description,
    };
    try {
      const file = await storage.createFile('65f370d2bf74728cc623', ID.unique(), image);
      await db.createDocument('65f370068f6e9602ae3b', '65f37014559fbba73560', ID.unique(), {
        title,
        cover: file.$id,
        description
      });
      alert("Blog added successfully");
      navigate('/blog');
    } catch (err) {
      alert(err.message)
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };


  if (!isSignedIn) {
    navigate('/')
  }
  return <div className="container mx-auto p-8">
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Blog Title"
          value={title}
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
          Description
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          placeholder="Blog Description"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Blog
        </button>
      </div>
    </form>
  </div>
}