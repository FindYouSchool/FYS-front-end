import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const [showLinks, setShowlinks] = useState(false);
  const handleShowLinks = () => {
    setShowlinks(!showLinks);
  };

  return (
    <nav className={`menu-container ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="logo-container bold ">Logo</div>
      <ul className="navbar-links d-flex ">
        <NavLink to="/" className="navbar-link">
          <li className="d-inline-block mx-3">Accueil</li>
        </NavLink>
        <NavLink to="/schools" className="navbar-link d-inline-block mx-3">
          Ecoles
        </NavLink>
        <NavLink to="/notice" className="navbar-link">
          <li className="d-inline-block mx-3">Donner son avis</li>
        </NavLink>
        <NavLink to="/login" className="navbar-link ">
          <li className="d-inline-block mx-3">Se connecter</li>
        </NavLink>
      </ul>
      <button className="navbar-burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Menu;
