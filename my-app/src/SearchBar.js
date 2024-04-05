import React from 'react';

function SearchBar({ handleSearch }) {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search Books..." onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
