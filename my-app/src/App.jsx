// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Service from "./components/service";

const App = () => {
  return (
    <Router>
      <div id="root">
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Service" element={<Service />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
