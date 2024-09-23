import React, { useState } from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for food products"
        className=" p-2 rounded-md bg-blue-40 w-60  bg-orange-600 outline-none border border-orange-300 box-shadow placeholder:text-orange-300"
      />
      <button type="submit" className="mt-2  rounded-md ml-4 px-4 py-2 border border-orange-300 box-shadow text-orange-300">Search</button>
    </form>
  );
};

export default SearchBar;
