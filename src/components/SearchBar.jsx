import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNews } from '../context/NewsContext';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const { setQuery } = useNews();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setQuery(input);
    navigate('/search');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-6 flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search news..."
        className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#00A8E8] transition"
      />
      <button
        type="submit"
        className="bg-[#007EA7] hover:bg-[#00A8E8] text-white px-5 py-2 rounded-r-lg transition-all"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
