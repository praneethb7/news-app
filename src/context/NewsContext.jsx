import React, { createContext, useState, useContext } from 'react';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('general');

  return (
    <NewsContext.Provider value={{ query, setQuery, category, setCategory }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);
