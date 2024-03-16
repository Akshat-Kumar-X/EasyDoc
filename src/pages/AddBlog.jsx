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
  return (
    <>
      <div class="relative py-3 sm:w-[510px] w-[430px] sm:max-w-xl mx-auto mt-5">
        <div
          class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 -rotate-6 rounded-3xl">
        </div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl p-30 pb-10">
          <h1 className='text-3xl font-semibold text-center'>Add Blog</h1>
          <div className="container mx-auto p-8">  
        <form onSubmit={handleSubmit} className="bg-white rounded">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="ppearance-none  rounded-lg w-full py-4 px-3 text-gray-700 leading-tight  bg-gray-100"
              id="title"
              type="text"
              placeholder="Blog Title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cover">
              Cover Image
            </label>
            <label
              className="w-full flex flex-col items-center px-4 py-4 justify-center cursor-pointer hover:bg-gray-200 duration-300 bg-gray-100 text-blue rounded-lg "
            >
              <span className="mt-2 text-base leading-normal mb-1">Select a file</span>
              <input
                type="file"
                className="hidden"
                id="cover"
                onChange={handleImageChange}
              />
            </label>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="description">
              Description
            </label>
            <textarea
              className="appearance-none  rounded-lg w-full py-4 px-3 text-gray-700 leading-tight  bg-gray-100"
              id="description"
              placeholder="Blog Description"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
  
        </div>
      </div>
      
    </>
  );
}