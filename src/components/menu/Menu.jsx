import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const [showLinks, setShowlinks] = useState(false);
  const handleShowLinks = () => {
    setShowlinks(!showLinks);
  };
  const handleClick = () => {
    if (showLinks) {
      setShowlinks(false);
    }
  };
  return (
    <nav className={`menu-container ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="logo-container fw-bold ">Logo</div>
      <ul className="navbar-links">
        <NavLink
          to="/"
          onClick={handleClick}
          className="navbar-link d-inline-block mx-3"
        >
          Accueil
        </NavLink>
        <NavLink
          to="/schools"
          onClick={handleClick}
          className="navbar-link d-inline-block mx-3"
        >
          Ecoles
        </NavLink>
        <NavLink
          to="/notice"
          onClick={handleClick}
          className="navbar-link d-inline-block mx-3"
        >
          Donner son avis
        </NavLink>
        <NavLink
          to="/login"
          onClick={handleClick}
          className="navbar-link d-inline-block mx-3"
        >
          Se connecter
        </NavLink>
      </ul>
      <button className="navbar-burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Menu;
