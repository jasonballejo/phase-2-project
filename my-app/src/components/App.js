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

  // const addShow = (newShow) => {
  //   setShow((showObj) => [...showObj, newShow])
  // }

  useEffect( () => {
    fetch("http://localhost:3000/shows")
      .then((res) => res.json())
      .then(showData => setShows(showData))
  },[])

  const addFavShow = (show) => {
    const newFavList = [...favorites, show];
    setFavorites(newFavList);
  };

  function handleDeleteClick() {
    fetch(`http://localhost:3000/shows/${shows.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("deleted!"));
  }

  // function handleUpdateItem(updatedItem) {
  //   console.log("In ShoppingCart:", updatedItem);
  // }

  return (
    <div className={(isDarkMode ? "dark" : "light")}> 
      <Navbar onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home 
          shows={shows}
          handleFavClicks={addFavShow}
        />} />
        <Route path="/watchlist" element={<Watchlist 
          show={favorites}
          handleDeleteClick={handleDeleteClick}
        />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;