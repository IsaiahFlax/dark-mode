import React, { useState } from 'react';
import { Router, NavLink, Route } from 'react-router-dom'
import Chart from '../components/Chart'
import useDarkMode from '../hooks/useDarkMode'

const Navbar = ({ coinData }) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }; 
  return (
    <nav className="navbar">
    <h1>Crypto Tracker</h1>
    <div>
      <div>
      {coinData.map(x=>x.name)}
      </div>     
  </div>
    <div className="dark-mode__toggle">
      <div
        onClick={toggleMode}
        className={darkMode ? 'toggle toggled' : 'toggle'}
      />
    </div>
  </nav>
      
    
  );

};

export default Navbar;
