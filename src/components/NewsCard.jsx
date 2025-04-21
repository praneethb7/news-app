import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md">
      {article.image && (
        <img src={article.image} alt="News" className="rounded-md mb-2" />
      )}
      <h2 className="text-lg font-semibold">{article.title}</h2>
      <p className="text-sm text-gray-700 my-2">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Read more
      </a>
    </div>
  );
};

export default NewsCard;