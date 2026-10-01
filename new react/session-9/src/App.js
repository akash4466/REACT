import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import DealsPage from './components/DealsPage';
import CartPage from './components/CartPage';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/deals" element={<DealsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="fk-footer">
          <p>© 2026 Flipkart Clone. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
