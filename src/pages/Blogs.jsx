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
      <div className='grid grid-cols-4 gap-x-2 p-2 gap-y-2'>
        {blogs.length && blogs.map(blog => (<Blogcard
          imageLink={blog?.image}
          key={blog.$id}
          name={blog?.title}
          description={blog?.description}
        />))}
        {/* <Blogcard 
          imageLink="https://imgur.com/t8nMHTw.png"
          name="Arthritis"
          description="Arthritis is a condition characterized by inflammation of the joints, causing pain, stiffness, and decreased mobility."
        /> */}
        {/* <Blogcard 
          imageLink="https://imgur.com/dhv63JT.png"
          name="Avocado"
          description="Avocados are rich in monounsaturated fats, which can help lower bad cholesterol levels (LDL)."
        />
        <Blogcard 
          imageLink="https://imgur.com/5Sdf6Xr.png"
          name="Exercise"
          description="Regular exercise is essential for maintaining overall health and well-being, improving cardiovascular health, boosting mood."
        />
        <Blogcard 
          imageLink="https://imgur.com/BzA9s7N.png"
          name="Fruits"
          description="Fruits are packed with essential vitamins, minerals, and antioxidants that support overall health and well-being.."
        />
        <Blogcard 
          imageLink="https://imgur.com/2LZMys6.png"
          name="Headache"
          description="Headaches can have various causes, including stress, dehydration, eyestrain, or underlying health conditions. Managing triggers and practicing relaxation techniques can help alleviate headache symptoms."
        />
        <Blogcard 
          imageLink="https://imgur.com/oKRMGvt.png"
          name="Salad"
          description="Fresh and healthy salad recipe with a variety of greens and toppings."
        />
        <Blogcard 
          imageLink="https://imgur.com/yo3zZvR.png"
          name="White Blood Cells (WBC)"
          description="White blood cells are an essential part of the immune system, defending the body against infections and diseases. Various factors can affect WBC count, including infections, medications, and medical conditions"
        /> */}
      </div>
    </div>
  );
};

export default Blogs;
