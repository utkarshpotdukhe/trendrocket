import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Feature from "./components/Features/Feature";
import Pricing from "./components/Pricing/Pricing";
import Integration from "./components/Integration/Integration";
import Solution from "./components/Solution/Solution";
import FAQ from "./components/FAQ/FAQ";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <Router>
      <Header />
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
      <Footer />
    </Router>
  );
}

export default App;
