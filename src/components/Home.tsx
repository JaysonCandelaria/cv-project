// src/components/HomePage.tsx
import React from 'react';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';

const Home: React.FC = () => (
  <div className="container py-5">
    <div className="card p-4 shadow-lg">
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

      <About />
      <Experience />
      <Education />
      <Skills />
    </div>
  </div>
);

export default Home;
