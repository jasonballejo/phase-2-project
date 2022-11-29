import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Login from './Login';
import MyList from './MyList';
import About from "./About";
import Home from "./Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("")
  const [showTitle, setShowTitle] = useState([])

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const addShowTitle = (newShow) => {
    setShowTitle(shows => {
      return [...shows, newShow]
    })
  }

  useEffect( () => {
    let url = "https://api.tvmaze.com/shows";
    if (searchQuery) {
      url = `https://api.tvmaze.com/singlesearch/shows?q=${searchQuery}`
    } 
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.map(newData => setShowTitle(newData))
    })
  },[])

  return (
    <div className={(isDarkMode ? "dark" : "light")}> 
      <Navbar onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          addShowTitle={addShowTitle}
        />} />
        <Route path="/about" element={<About />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;