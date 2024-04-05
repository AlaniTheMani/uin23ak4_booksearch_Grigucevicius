import React from 'react';

function BookList({ books }) {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {books.map(book => (
          <li key={book.key}>
            <div>
              <h3>{book.title}</h3>
              <p>Published: {book.first_publish_year}</p>
              <p>Author(s): {book.author_name.join(', ')}</p>
              <p>Average rating: {book.average_rating}</p>
              <a href={`https://www.amazon.com/s?k=${book.amazon_id}`} target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;