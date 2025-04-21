import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';
import SearchBar from '../components/SearchBar';
import { useNews } from '../context/NewsContext';

const Search = () => {
  const { query } = useNews();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (!query) return;
    axios
      .get(`https://gnews.io/api/v4/search?q=${query}&token=85f00e3fd6924082ac96cfa47265f580&lang=en`)
      .then((res) => setArticles(res.data.articles))
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <div className="p-4">
      <SearchBar />
      <h1 className="text-xl font-bold mb-4">Search Results for "{query}"</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Search;
