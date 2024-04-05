import React from 'react';

function SearchBar({ handleSearch }) {
  const handleChange = (e) => {
    const query = e.target.value;
    if (query.length >= 3) {
      handleSearch(query);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Search Books..." onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
