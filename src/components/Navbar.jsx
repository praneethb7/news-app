import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const categories = ['world', 'nation', 'business', 'technology', 'entertainment', 'sports', 'science', 'health'];
  return (
    <nav className="bg-blue-700 text-white p-4 flex flex-wrap justify-between">
      <Link to="/" className="text-xl font-bold">News App</Link>
      <div className="flex gap-4 flex-wrap">
        {categories.map(cat => (
          <Link key={cat} to={`/category/${cat}`} className="hover:underline capitalize">
            {cat}
          </Link>
        ))}
        <Link to="/search" className="hover:underline">Search</Link>
      </div>
    </nav>
  );
};

export default Navbar;