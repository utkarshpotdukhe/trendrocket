import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
   
        {/* <Link to="/">Home</Link>
        <Link to="/Feature">Feature</Link>
        <Link to="/Pricing">Pricing</Link>
        <Link to="/Integration">Integration</Link>
        <Link to="/Solution">Solution</Link>
        <Link to="/FAQ">FAQ</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Signup</Link> */}
        <div className="navbar-wraper">
          <Link
            to="/"
            className="new-brand w-nav-brand"
            data-cmp-ab={2}
            tabIndex={-1}
          >
            <img
              src="https://assets-global.website-files.com/623b203c1555087b0395f66e/64fcbfe9a1fe9a092b7a017f_Trend%20Rocket%20Logo.png"
              loading="lazy"
              alt=""
              data-cmp-ab={2}
              data-cmp-info={10}
            />
          </Link>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a
              href="/feature"
              target="_blank"
              className="new-nav-link w-nav-link"
              data-cmp-ab={2}
              tabIndex={-1}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="new-nav-link w-nav-link"
              data-cmp-ab={2}
              tabIndex={-1}
            >
              Pricing
            </a>
            <a
              href="#"
              className="new-nav-link w-nav-link"
              data-cmp-ab={2}
              tabIndex={-1}
            >
              Integration
            </a>
            <a
              href="#"
              className="new-nav-link w-nav-link"
              data-cmp-ab={2}
              tabIndex={-1}
            >
              Solution
            </a>
            <a
              href="/faq"
              target="_blank"
              className="new-nav-link w-nav-link"
              data-cmp-ab={2}
              tabIndex={-1}
            >
              FAQ
            </a>
            <div className="new_nav-button-wraper show-on-mobile">
              <a
                href="https://app.trendrocket.io/login"
                className="nav-login-link is-mobile w-nav-link"
                data-cmp-ab={2}
                tabIndex={-1}
              >
                Login
              </a>
              <a
                href="#"
                className="nav-login-link w-nav-link"
                data-cmp-ab={2}
                tabIndex={-1}
              >
                Login
              </a>
              <a
                href="https://www.trendrocket.io/#pricing"
                target="_blank"
                className="nav-link-block nav w-inline-block"
                data-cmp-ab={2}
                tabIndex={-1}
              >
                <div className="nav-link-text">Sign up</div>
              </a>
            </div>
          </nav>
          <div className="new_nav-button-wraper">
            <a
              href="https://app.trendrocket.io/login"
              className="nav-login-link is-mobile w-nav-link"
              data-cmp-ab={2}
              tabIndex={-1}
            >
              Login
            </a>
            <a
              href="https://app.trendrocket.io/login"
              className="nav-login-link w-nav-link"
              data-cmp-ab={2}
              tabIndex={-1}
            >
              Login
            </a>
            <a
              href="https://www.trendrocket.io/#pricing"
              className="nav-link-block nav w-inline-block"
              data-cmp-ab={2}
              tabIndex={-1}
            >
              <div className="nav-link-text">Sign up</div>
            </a>
          </div>
          <div className="new_nav-button-wraper hide">
            <a
              href="#"
              className="nav-login-link w-nav-link"
              data-cmp-ab={2}
              tabIndex={-1}
            >
              Login
            </a>
            <a
              href="https://app.trendrocket.io/login"
              className="nav-link-block w-inline-block"
              data-cmp-ab={2}
              tabIndex={-1}
            >
              <div className="nav-link-text">Sign up</div>
            </a>
          </div>
          <div
            className="menu-button-3 w-nav-button"
            style={{ WebkitUserSelect: "text" }}
            aria-label="menu"
            role="button"
            tabIndex={0}
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <div className="icon-4 w-icon-nav-menu" />
          </div>
        </div>
    </>
  );
};

export default Header;
