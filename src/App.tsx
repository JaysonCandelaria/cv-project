// src/App.tsx
import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

const App: React.FC = () => {
  return (
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


        {/* Add your other sections here */}
        <About />
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
  );
};
export default App;
