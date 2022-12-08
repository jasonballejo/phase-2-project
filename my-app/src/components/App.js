import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Login from './Login';
import Watchlist from './Watchlist';
import Home from "./Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [shows, setShows] = useState([])
  const [favorites, setFavorites] = useState([])

  function onDarkModeClick() {
  setIsDarkMode((isDarkMode) => !isDarkMode);
}

useEffect( () => {
  fetch("http://localhost:3000/shows")
    .then((res) => res.json())
    .then(showData => setShows(showData))
},[])

const addFavShow = (show) => {
  const newFavList = [...favorites, show];
  setFavorites(newFavList);
};

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
    <Navbar onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
    <Routes>
      <Route path="/" element={<Home 
        shows={shows}
        updateItem={handleUpdateItem}
        addFavorites={addFavShow}
      />} />
      <Route path="/watchlist" element={<Watchlist 
        show={favorites}
      />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </div>
);
}

export default App;