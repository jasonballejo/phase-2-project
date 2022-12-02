import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Login from './Login';
import MyList from './MyList';
import About from "./About";
import Home from "./Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [show, setShow] = useState([])

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const addShow = (newShow) => {
    setShow((showObj) => [...showObj, newShow])
  }

  useEffect( () => {
    fetch("http://localhost:3000/shows")
      .then((res) => res.json())
      .then(showData => setShow(showData))
  },[])

  return (
    <div className={(isDarkMode ? "dark" : "light")}> 
      <Navbar onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home 
          show={show}
        />} />
        <Route path="/about" element={<About />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;