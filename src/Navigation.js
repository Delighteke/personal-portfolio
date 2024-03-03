// Navigation.js
// Eke Delight
// 301325470
// Date: 03/03/2024
 
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg'; // Import your logo image file
import './styles.css'; // Import your external CSS file

function Navigation() {
  return (
    <nav className="nav-container">
      <div className="logo-container"> {/* Container for the logo */}
        <img src={logo} alt="Logo" className="logo" /> {/* Logo image */}
      </div>
      <ul className="nav-links"> {/* Container for navigation links */}
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/about" className="nav-item">About</Link></li>
        <li><Link to="/projects" className="nav-item">Projects</Link></li>
        <li><Link to="/services" className="nav-item">Services</Link></li>
        <li><Link to="/contact" className="nav-item">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;





