// import libraries
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
// import pages
import Home from '@/pages/Home';
// import components
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import UserProfile from '@/pages/UserProfile';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <div className="flex h-screen pt-[86px]">
        <Sidebar />
        <main className="pt-16 pl-28 pr-24 pb-24 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  </StrictMode>
);
