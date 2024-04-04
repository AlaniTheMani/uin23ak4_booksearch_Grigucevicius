import React from 'react';

function Layout({ children }) {
  return (
    <div className="container">
      <header>
        {/* Legg til HTML for header */}
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Legg til HTML for footer */}
      </footer>
    </div>
  );
}

export default Layout;
