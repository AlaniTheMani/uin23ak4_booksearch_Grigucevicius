import React, { useState } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import { searchBooks } from './api';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = async (query) => {
    const books = await searchBooks(query);
    setSearchResults(books);
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <BookList books={searchResults} />
    </div>
  );
}

export default App;