import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project Imports
import Home from "./pages/Home";
import CallForPapers from "./pages/CallForPapers";
import Committee from "./pages/Committee";
import Header from "./components/Header";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/call-for-papers" exact element={<CallForPapers />} />
          <Route path="/comittee" exact element={<Committee />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
