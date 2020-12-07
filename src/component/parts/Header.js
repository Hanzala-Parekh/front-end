import React from "react";
import Navbar from "./Navbar";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className="clearfix header-style5">
      <div className="logo-place">
        <div className="container">
          <div className="inner-logo-place">
            <a className="navbar-brand" href="index.html">
              <img src={logo} alt="" />
            </a>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
