import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Laminas from '../components/Laminas';
import Album from '../components/Album';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-stickers" element={<Laminas />} />
        <Route path="/my-album" element={<Album />} />
      </Routes>
    </Router>
  );
};

export default App;
