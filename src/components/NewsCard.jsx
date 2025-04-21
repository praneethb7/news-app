import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ article }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-wrap justify-center gap-4 px-2">
    <div className="bg-[#003459]/90 text-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden max-w-sm mx-auto">
      {article.image && (
        <img
          src={article.image}
          alt="News"
          className="w-full h-36 object-cover"
        />
      )}

      <div className="p-3 flex flex-col flex-grow">
        <h2 className="text-base font-semibold mb-1 line-clamp-2">
          {article.title}
        </h2>
        <p className="text-sm text-white/80 line-clamp-3 flex-grow">
          {article.description}
        </p>

        <div className="flex items-center justify-between mt-3 text-xs text-white/60">
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00A8E8] hover:underline"
          >
            Read →
          </a>
        </div>

        <div className="mt-2 flex justify-end items-center gap-3 text-white/80">
          <button
            onClick={() => setLiked(!liked)}
            title={liked ? 'Unlike' : 'Like'}
            className="hover:text-pink-400 transition"
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button
            title="Share (dummy)"
            className="hover:text-[#00A8E8] transition"
          >
            <FaShareAlt />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NewsCard;
