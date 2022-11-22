import React from 'react';
import DarkMode from './DarkMode';
import './App.css'

function Navbar() {
  return (
    <div className="Nav">
        <DarkMode />
      <h1>NavBar</h1>
    </div>
  );
}

export default Navbar;