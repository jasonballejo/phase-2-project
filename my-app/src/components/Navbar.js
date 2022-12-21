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
                    <NavLink to="/watchlist" exact>WATCHLIST</NavLink>
                </li>
                <li>
                    <NavLink to="/addshow" exact>{isSignedIn ? `${username}` : "ADD SHOW"}</NavLink>
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