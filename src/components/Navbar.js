import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">मनZil</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/flights">Flights</Link></li>
        <li><Link to="/hotels">Hotels</Link></li>
        <li><Link to="/explorer">Explorer</Link></li>
        <li><Link to="/itinerary">Itinerary</Link></li>
        <li><Link to="/packing">Packing List</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
