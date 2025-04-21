import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NewsCard from '../components/NewsCard';

const Category = () => {
  const { type } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`https://gnews.io/api/v4/top-headlines?token=85f00e3fd6924082ac96cfa47265f580&lang=en&country=us&topic=${type}`)
      .then((res) => setArticles(res.data.articles))
      .catch((err) => console.error(err));
  }, [type]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize mb-4">{type} News</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Category;