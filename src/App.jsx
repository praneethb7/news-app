import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Search from './pages/Search';

const App = () => {
  return (
    <div className="min-h-screen bg-[#000A0F] flex items-center justify-center p-4">
  <div className="w-full max-w-[1280px] bg-[#000F16] rounded-3xl shadow-2xl overflow-hidden border border-[#005577]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
    </div>
  );
};

export default App;
