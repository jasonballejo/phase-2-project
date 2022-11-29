import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Login from './Login';
import MyList from './MyList';
import About from "./About";
import Home from "./Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  useEffect( () => {
    let url = "https://api.tvmaze.com/shows";
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.map(newData => console.log(newData))
    } )
  },[])

  return (
    <div className={(isDarkMode ? "dark" : "light")}> 
      <Navbar onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;