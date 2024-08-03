import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Laminas from '../components/Laminas';
import Album from '../components/Album';
import Login from '../components/Login';
import Register from '../components/Resgister';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/get-stickers" element={<Laminas />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register'  element={<Register />} />
        <Route path="/my-album" element={<Album />} />
      </Routes>
    </Router>
  );
};

export default App;
