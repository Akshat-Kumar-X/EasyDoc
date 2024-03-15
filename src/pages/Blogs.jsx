import React from 'react';
import Blogcard from './Blogcard';
import { db, storage } from '../helper/appwrite';

const Blogs = () => {
  const [blogs, setBlogs] = React.useState([]);

  const getBlogs = async () => {
    try {
      const result = await db.listDocuments('65f370068f6e9602ae3b', '65f37014559fbba73560');
      if (result.total) {
        const imageIds = result.documents.map(blog => blog.cover);
        const imagePromises = imageIds.map(imageId =>
          storage.getFileView('65f370d2bf74728cc623', imageId)
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
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2'>
        {blogs.length && blogs.map(blog => (<Blogcard
          imageLink={blog?.image}
          key={blog.$id}
          name={blog?.title}
          description={blog?.description}
        />))}
      </div>
    </div>
  );
};

export default Blogs;
