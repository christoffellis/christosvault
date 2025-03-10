import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and related components
import { LandingPage } from './Landing/Landing';
import RuneSpinner from './RuneSpinner/RuneSpinner'; // Example of additional page/component
import PotionPage from './Random Potions/Potions';
import { MapGrid } from './MapGrid/MapGrid';
import { CharacterGenerator } from './CharacterGenerator/CharacterGenerator';
import { NPCQuickStats } from './npcQuickStat/npxQuickStats';
import { MapsPage } from './Maps';
import { BackgroundAssist } from './BackgroundAssist';
import { Loader } from './Loaders/Loader';

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
        <Route path="/quick-stats" element={<NPCQuickStats />} />
        <Route path="/maps/:map-name" element={<MapsPage />} />
        <Route path="/backgrounds" element={<BackgroundAssist />} />
        <Route path="/loader/:loader" element={<Loader />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
