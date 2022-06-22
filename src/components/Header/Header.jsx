import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-overlay  position-relative">
        <h1 className="header-title">Find Your School</h1>
        <p>
          Find School t’aide à choisir ton école grâce aux avis vérifiés des
          étudiants, entreprises et professeur.
        </p>
        <div
          style={{
            position: "absolute",
            bottom: "-25px",
          }}
        >
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
