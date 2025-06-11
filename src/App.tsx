// src/App.tsx
import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <>
      {/* 🔷 NavBar na nasa labas ng card */}
      <NavBar />

      {/* 🔶 CV Container */}
      <div className="container py-5">
        <div className="card p-4 shadow-lg">
          {/* Header Section */}
          <div className="text-center mb-4 p-5 text-white">
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '1rem',
                borderRadius: '0.5rem',
              }}
            >
              <h1 className="text-white">Jayson Candelaria</h1>
              <p className="text-light mb-0">Full Stack Developer</p>
            </div>
          </div>

          {/* Other Components */}
          <About />
          <Experience />
          <Education />
          <Skills />
        </div>
      </div>
    </>
  );
};

export default App;
