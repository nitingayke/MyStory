import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Shared/Navbar";
import HomePage from "./HomePage/HomePage";
import Footer from "./Shared/Footer";

export default function App() {
  return (
    <Router>

      <Navbar />

      <div className="flex-1">
        <Routes>

          <Route path="/" element={<HomePage />} />

        </Routes>
      </div>
      
      <Footer />

    </Router>
  );
}
