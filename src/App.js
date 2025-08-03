import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Explorer from "./pages/Explorer";
import Itinerary from "./pages/Itinerary";
import PackingList from "./pages/PackingList";
import Hero from './components/Hero';
// import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/packing" element={<PackingList />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
