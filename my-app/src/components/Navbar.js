import React from 'react';
import { NavLink } from "react-router-dom"
import DarkMode from './DarkMode';

function Navbar({ onDarkModeClick, isDarkMode  }) {

  return (
    <div className="navbar">
        <div>
            <ul className='nav-links'>
                <li>
                    <NavLink to="/" exact>HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/watchlist" exact>WATCHLIST</NavLink>
                </li>
                <li>
                    <NavLink to="/newshow" exact>NEW SHOW</NavLink>
                </li>
                <li>
                    <NavLink to="/counter" exact>COUNTER</NavLink>
                </li>
                <li>
                    <DarkMode onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;