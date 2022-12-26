import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import NewShow from './NewShow';
import Watchlist from './Watchlist';
import Home from "./Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [shows, setShows] = useState([])
  const [btnPopup, setBtnPopup] = useState(false)

  //Fetch data
  useEffect( () => {
    fetch("http://localhost:3000/shows")
      .then((res) => res.json())
      .then(showData => setShows(showData))
  },[])

  //Darkmode onClick
  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  //Handles the Watchlist update
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

  //Handles the 
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

  //Handles new show to state so it can appear
  function handleUpdateCreatedShow(newShow) {
    setShows([...shows, newShow]);
  }

  //Handles the Click to Delete
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
        btnPopup={btnPopup}
        setBtnPopup={setBtnPopup}
        onDeleteItem={handleDeleteItem}
      />} />
      <Route path="/watchlist" element={<Watchlist 
        shows={shows}
        handleWatchListItem={handleWatchListItem}
        btnPopup={btnPopup}
        setBtnPopup={setBtnPopup}
      />} />
      <Route path="/newshow" element={<NewShow 
        addNewShow={handleUpdateCreatedShow}
      /> 
      } />
    </Routes>
  </div>
);
}

export default App;