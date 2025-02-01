import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and related components
import { LandingPage } from './Landing/Landing';
import RuneSpinner from './RuneSpinner/RuneSpinner'; // Example of additional page/component
import PotionPage from './Random Potions/Potions';
import { MapGrid } from './MapGrid/MapGrid';
import { CharacterGenerator } from './CharacterGenerator/CharacterGenerator';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Define routes here */}
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/tablet" element={<RuneSpinner />} />
        <Route path="/potions" element={<PotionPage />} />
        <Route path="/map-grids" element={<MapGrid />} />
        <Route path="/character-generator" element={<CharacterGenerator />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
