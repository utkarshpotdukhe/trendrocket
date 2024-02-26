import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Feature from "./Pages/Features/Feature";
import Pricing from "./Pages/Pricing/Pricing";
import Integration from "./Pages/Integration/Integration";
import Solution from "./Pages/Solution/Solution";
import FAQ from "./Pages/FAQ/FAQ";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Integration" element={<Integration />} />
        <Route path="/Solution" element={<Solution />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
