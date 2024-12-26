import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./shared/Navbar";
import HomePage from "./homePage/HomePage";
import Footer from "./shared/Footer";

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
