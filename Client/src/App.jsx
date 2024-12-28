import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./shared/Navbar.jsx";
import Footer from "./shared/Footer.jsx";
import HomePage from "./Dashboard.jsx/HomePage.jsx";

export default function App() {
  return (
    <Router>

      <Navbar />

      <div className="flex-1">
        <Routes>

          <Route path="/" element={<HomePage/>} />

        </Routes>
      </div>
      <Footer />

    </Router>
  );
}
