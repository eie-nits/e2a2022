import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project Imports
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      {/* Navbar Here */}
      <Navbar />
      <div style={{ marginTop: "48px" }} />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
