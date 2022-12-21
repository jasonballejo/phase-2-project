import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import AddShow from './AddShow';
import Watchlist from './Watchlist';
import Home from "./Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [shows, setShows] = useState([])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isSignedIn, setIsSignedIn] = useState(false)

  function onDarkModeClick() {
  setIsDarkMode((isDarkMode) => !isDarkMode);
}

  function signedInClicked() {
    setIsSignedIn((isSignedIn) => !isSignedIn);
  }

useEffect( () => {
  fetch("http://localhost:3000/shows")
    .then((res) => res.json())
    .then(showData => setShows(showData))
},[])

  function handleWatchListItem(updatedShow) {
    const updatedWatchlist = shows.map((show) => {
      if (show.id === updatedShow.id){
        return updatedShow;
      } else {
        return show
      }
    })
    setShows(updatedWatchlist) 
  }

  function handleUpdateItem(updatedItem) {
    const updatedItems = shows.map((show) => {
      if (show.id === updatedItem.id) {
        return updatedItem;
      } else {
        return show;
      }
    });
    setShows(updatedItems);
  }

return (
  <div className={(isDarkMode ? "dark" : "light")}> 
    <Navbar 
      onDarkModeClick={onDarkModeClick} 
      isDarkMode={isDarkMode} 
      username={username}
      isSignedIn={isSignedIn}
      signedInClicked={signedInClicked}
    />
    <Routes>
      <Route path="/" element={<Home 
        shows={shows}
        updateItem={handleUpdateItem}
        handleWatchListItem={handleWatchListItem}
      />} />
      <Route path="/watchlist" element={<Watchlist 
        shows={shows}
        handleWatchListItem={handleWatchListItem}
      />} />
      <Route path="/addshow" element={<AddShow 
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        isSignedIn={isSignedIn}
        signedInClicked={signedInClicked}
      /> 
      } />
    </Routes>
  </div>
);
}

export default App;