import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import "./Menu.css";

// Avatar
import Avatar from "../Avatar/Avatar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import AvatarPopover from "../Avatar/AvatarPopover";

const Menu = () => {
  const { isAuthenticated } = useAuth();
  const [showLinks, setShowlinks] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const ref = React.createRef();
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
      <div onClick={() => navigate("/")} className="logo-container">
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
          <div style={{ position: "relative" }}>
            <OverlayTrigger
              placement="bottom"
              trigger="click"
              overlay={<AvatarPopover />}
            >
              <button
                style={{
                  margin: 0,
                  padding: 0,
                  border: "none",
                  background: "none",
                }}
              >
                <Avatar
                  size={35}
                  containerStyle="avatar-container"
                  className="avatar-opened-nav mx-3"
                  ref={ref}
                  // onClick={() => {
                  //   handleClick();
                  //   //navigate("/profile");
                  // }}
                />
              </button>
            </OverlayTrigger>
          </div>
        ) : (
          <div className="menu-login-container">
            <button
              onClick={() => {
                handleClick();
                navigate("/login", { state: { from: location.pathname } });
              }}
              className="btn btn-light "
            >
              Se connecter
            </button>
            <button
              onClick={() => {
                navigate("/sign-up", { state: { from: location.pathname } });
                handleClick();
              }}
              className="btn btn-primary mx-2"
            >
              S'inscrire
            </button>
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
