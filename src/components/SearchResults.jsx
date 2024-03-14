import React from 'react';
import SearchCard from './SearchCard';

const SearchResults = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {data.map((item, index) => (
            <SearchCard key={index} {...item} />
      ))}
    </div>
  );
};

export default SearchResults;
