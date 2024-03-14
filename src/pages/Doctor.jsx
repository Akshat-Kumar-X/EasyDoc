import React from 'react'
import SearchResults from '../components/SearchResults';
import searchData from '../../public/data.js';
import SearchCard from '../components/SearchCard.jsx';

const Doctor = () => {
  return (
      <div className="grid grid-cols-3 gap-x-3 gap-y-3">
        <SearchCard
          name="Mary Phiri"
          occupation="Cancer Specialist"
          experience="10+ years"
          email="mary@gmail.com"
          imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
        /><SearchCard
          name="Mary Phiri"
          occupation="Cancer Specialist"
          experience="10+ years"
          email="mary@gmail.com"
          imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
        />
        <SearchCard
          name="Mary Phiri"
          occupation="Cancer Specialist"
          experience="10+ years"
          email="mary@gmail.com"
          imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
        /><SearchCard
        name="Mary Phiri"
        occupation="Cancer Specialist"
        experience="10+ years"
        email="mary@gmail.com"
        imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxhdmF0YXJ8ZW58MHwwfHx8MTY5MTg0NzYxMHww&ixlib=rb-4.0.3&q=80&w=1080"
      />
      </div>
  )
};

export default Doctor