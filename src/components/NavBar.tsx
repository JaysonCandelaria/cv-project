import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../NavBar.css';


const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/project">Project</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-hover" href="#experience">Images</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-hover" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
