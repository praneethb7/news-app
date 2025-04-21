import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../components/NewsCard';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gnews.io/api/v4/top-headlines?token=85f00e3fd6924082ac96cfa47265f580&lang=en&country=us`)
      .then((res) => setArticles(res.data.articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default Home;
