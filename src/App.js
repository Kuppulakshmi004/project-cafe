import React, { useState } from "react";
import "./component/Header.css";
import Home from "./component/Home";
import Menu from "./component/Menu";
import About from "./component/About";
import './App.css';
import {Routes,Route,Link} from "react-router-dom"

function App() {
  // const [openLinks, setOpenLinks] = useState(false);

  // const toggleNavbar = () => {
  //   setOpenLinks(!openLinks);
  // };
  return (
    <div className="navbar">
      <div className="title">
       

      </div>
          <ul>
         <h1>
          Welcome to Wag Cafe</h1>
        
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          </ul>
          
        
      {/* <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        
        <button onClick={toggleNavbar}>
        
        </button> */}

      <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/menu"  element={<Menu/>} />
          <Route path="/about"  element={<About/>} />
        </Routes>
    </div>
  );
}

export default App;
