import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./menu.css";

const Menu = () => {
    const [showLinks,setShowlinks]=useState(false);
    const handleShowLinks = ()=>{
        setShowlinks(!showLinks)
    }

    return (
        // <nav className="menu-container show-nav">
        <nav className={`menu-container ${showLinks ? "show-nav" : "hide-nav"} `}>
            <div className="logo-container">Logo</div>
            <ul className="navbar-links">
                <NavLink to="/" className="navbar-link">
                    <li className="items">Accueil</li>
                </NavLink>
                <NavLink to="/Ecoles" className="navbar-link">
                    <li className="items">Ecoles</li>
                </NavLink>
                <NavLink to="/Connexion" className="navbar-link">
                    <li className="items">Connexion</li>
                </NavLink>
            </ul>
            <button className="navbar-burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    );
};

export default Menu;