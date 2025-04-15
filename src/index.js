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
import { LoaderController } from './LoaderController/LoaderController';
import { AppBar } from './Landing/AppBar';
import { WitchIsDead } from './Games/witchIsDead';
import Quotes from './quotes/quotes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <AppBar /> {/* App Bar is now globally included */}
      <Routes>
        {/* Define routes here */}
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/tablet" element={<RuneSpinner />} />
        <Route path="/potions" element={<PotionPage />} />
        <Route path="/map-grids" element={<MapGrid />} />
        <Route path="/character-generator" element={<CharacterGenerator />} />
        <Route path="/quick-stats" element={<NPCQuickStats />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/maps/:map-name" element={<MapsPage />} />
        <Route path="/backgrounds" element={<BackgroundAssist />} />
        <Route path="/loader/:loader" element={<Loader />} />
        <Route path="/loader/controller" element={<LoaderController />} />
        <Route path="/games/the-witch-is-dead" element={<WitchIsDead />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
