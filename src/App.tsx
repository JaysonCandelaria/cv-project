import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Project from './components/Project';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
};

export default App;
