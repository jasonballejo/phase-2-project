import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import NewShow from './NewShow';
import Watchlist from './Watchlist';
import Home from "./Home";
import Counter from './Counter';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [shows, setShows] = useState([])

  useEffect( () => {
    fetch("http://localhost:3000/shows")
      .then((res) => res.json())
      .then(showData => setShows(showData))
  },[])

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

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

  function handleUpdateCreatedShow(newShow) {
    setShows([...shows, newShow]);
  }

  function handleDeleteItem(deletedItem){
    const updateShows = shows.filter((show) => show.id !== deletedItem.id)
    setShows(updateShows);
  }

return (
  <div className={(isDarkMode ? "dark" : "light")}> 
    <Navbar 
      onDarkModeClick={onDarkModeClick} 
      isDarkMode={isDarkMode} 
    />
    <Routes>
      <Route path="/" element={<Home 
        shows={shows}
        handleWatchListItem={handleWatchListItem}
        onDeleteItem={handleDeleteItem}
      />} />
      <Route path="/watchlist" element={<Watchlist 
        shows={shows}
        handleWatchListItem={handleWatchListItem}
      />} />
      <Route path="/newshow" element={<NewShow 
        addNewShow={handleUpdateCreatedShow}
      /> } /> 
      <Route path="/counter" element={<Counter />} />
    </Routes>
  </div>
);
}

export default App;