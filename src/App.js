import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project Imports
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CallForPapers from "./pages/CallForPapers";
import Committee from "./pages/Committee";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      {/* Navbar Here */}
      {/* <Navbar />
      <div style={{ marginTop: "48px" }} /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/call-for-papers" exact element={<CallForPapers />} />
          <Route path="/comittee" exact element={<Committee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
