import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useNews } from '../context/NewsContext';

const Navbar = () => {
  const [input, setInput] = useState('');
  const { setQuery } = useNews();
  const navigate = useNavigate();

  const categories = [
    'world', 'nation', 'business', 'technology',
    'entertainment', 'sports', 'science', 'health'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setQuery(input);
    navigate('/search');
  };

  return (
    <nav className="bg-[#00171F] text-white px-6 py-4 shadow-lg backdrop-blur-md bg-opacity-80 sticky top-0 z-50">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="text-3xl font-bold tracking-wide text-[#00A8E8]">
          🗞️ NewsNest
        </Link>

        <form onSubmit={handleSubmit} className="flex bg-white bg-opacity-10 rounded-xl overflow-hidden backdrop-blur px-3 py-1 shadow-md">
          <input
            type="text"
            placeholder="Search news..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent text-white placeholder-white focus:outline-none px-2 w-40 md:w-64"
          />
          <button
            type="submit"
            className="text-sm font-medium text-white hover:text-[#00A8E8] transition"
          >
            🔍
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat}`}
              className="capitalize px-3 py-1 hover:bg-[#003459] rounded-lg transition"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
