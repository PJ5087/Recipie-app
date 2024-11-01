import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Importing the CSS file

const NavBar = () => {
  return (
    <nav className="app-nav">
      <NavLink to="/" className="head">FOOD RECIPE APP</NavLink>
      <NavLink to="/favorites" className="favorites">❤️</NavLink>
    </nav>
  );
};

export default NavBar;
