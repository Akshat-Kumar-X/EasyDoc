import React from 'react';
import SearchCard from './SearchCard';

const SearchResults = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-x-3 gap-y-3">
      {data.map((item, index) => (
        <SearchCard key={index} {...item} />
      ))}
    </div>
  );
};

export default SearchResults;
