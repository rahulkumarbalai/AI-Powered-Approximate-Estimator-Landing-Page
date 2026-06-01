import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Landing from './pages/Landing';
import LiveDemo from './pages/LiveDemo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/smart-aes" element={<LiveDemo />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
