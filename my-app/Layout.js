import React from 'react';

function Layout({ children }) {
  return (
    <div className="container">
      <header>
        <h1>Book Search</h1>
        <input type="text" placeholder="Search Books..." />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
