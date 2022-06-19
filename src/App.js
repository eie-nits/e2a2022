import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project Imports
import Home from "./pages/Home";
import CallForPapers from "./pages/CallForPapers";
import Committee from "./pages/Committee";
import Header from "./components/Header";
import ContactUs from "./pages/ContactUs";
import ImportantDates from "./pages/ImportantDates";
import Registration from "./pages/Registration";
import Program from "./pages/Program";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/call-for-papers" exact element={<CallForPapers />} />
          <Route path="/comittee" exact element={<Committee />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
          <Route path="/important-dates" exact element={<ImportantDates />} />
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/program" exact element={<Program />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
