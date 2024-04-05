import React, { useState } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import { searchBooks } from './api';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = async (query) => {
    if (query.length >= 3) {
      const books = await searchBooks(query);
      setSearchResults(books);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      {searchResults.length > 0 ? (
        <BookList books={searchResults} />
      ) : (
        <h2>No search results</h2>
      )}
    </div>
  );
}

export default App;