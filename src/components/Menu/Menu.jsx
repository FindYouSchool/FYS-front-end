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
          Écoles
        </NavLink>
        <NavLink
          to="/notice"
          onClick={handleClick}
          className="navbar-link d-inline-block mx-3"
        >
          Donner un avis
        </NavLink>
        {isAuthenticated ? (
          <Avatar
            size={30}
            containerStyle="avatar-container"
            className="avatar-opened-nav mx-5"
            onClick={() => {
              handleClick();
              navigate("/profile");
            }}
          />
        ) : (
          <div className="menu-login-container">
            <NavLink
              to="/login"
              onClick={handleClick}
              className="btn btn-light "
            >
              Se connecter
            </NavLink>
            <NavLink
              to="/sign-up"
              onClick={handleClick}
              className="btn btn-primary mx-2"
            >
              S'inscrire
            </NavLink>
          </div>
        )}
      </ul>
      <button className="navbar-burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Menu;
