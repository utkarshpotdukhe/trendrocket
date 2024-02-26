import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Feature">Feature</Link>
        <Link to="/Pricing">Pricing</Link>
        <Link to="/Integration">Integration</Link>
        <Link to="/Solution">Solution</Link>
        <Link to="/FAQ">FAQ</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Signup</Link>

      </nav>
    </header>
  );
};

export default Header;
