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
    <form onSubmit={handleSubmit} className="my-4 flex justify-center">
      <input
        type="text"
        placeholder="Search news..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded-l-md w-2/3 max-w-md"
      />
      <button type="submit" className="bg-blue-700 text-white px-4 rounded-r-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
