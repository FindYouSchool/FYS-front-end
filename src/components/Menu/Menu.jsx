import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import "./Menu.css";

const Menu = () => {
  const { isAuthenticated } = useAuth();
  const [showLinks, setShowlinks] = useState(false);
  const navigate = useNavigate();

  const handleShowLinks = () => {
    setShowlinks(!showLinks);
  };
  const handleClick = () => {
    if (showLinks) {
      setShowlinks(false);
    }
  };
  const goHome = () => {
    navigate("/");
  };
  return (
    <nav className={`menu-container ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div onClick={goHome} className="logo-container">
        <span>FYS</span>
      </div>
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
        {isAuthenticated ? (
          <Avatar
            size={30}
            containerStyle="avatar-container"
            className="avatar-opened-nav"
            onClick={() => {
              handleClick();
              navigate("/profile");
            }}
          />
        ) : (
          <NavLink
            to="/login"
            onClick={handleClick}
            className="navbar-link d-inline-block mx-3"
          >
            Se connecter
          </NavLink>
        )}
      </ul>
      <button className="navbar-burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Menu;
