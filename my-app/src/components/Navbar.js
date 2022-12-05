import React from 'react';
import { NavLink } from "react-router-dom"
import DarkMode from './DarkMode';

function Navbar({ onDarkModeClick, isDarkMode  }) {
  return (
    <div className="navbar">
        <div>
            <ul className='nav-links'>
                <li>
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Watchlist" exact>Watchlist</NavLink>
                </li>
                <li>
                    <NavLink to="/login" exact>Login</NavLink>
                </li>
            </ul>
            <DarkMode onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
        </div>
    </div>
  );
}

export default Navbar;