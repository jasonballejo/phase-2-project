import React from 'react';
import { NavLink } from "react-router-dom"
import DarkMode from './DarkMode';

function Navbar({ onDarkModeClick, isDarkMode, username, isSignedIn, signedInClicked  }) {

  return (
    <div className="navbar">
        <div>
            <ul className='nav-links'>
                <li>
                    <NavLink to="/" exact>HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/Watchlist" exact>WATCHLIST</NavLink>
                </li>
                <li>
                    <NavLink to="/login" exact>{isSignedIn ? `${username}` : "LOGIN"}</NavLink>
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