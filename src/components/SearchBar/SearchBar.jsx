import React, { useState } from "react";
import "./searchBar.css";

const SearchBar = ({ onClick }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <div className="searchbar-container">
      <form>
        <input
          className="searchbar-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Quelle école vous intéresse ?"
          name="search"
          id="search"
        />
        <button onClick={handleSearch} type="submit" className="searchbar-btn">
          Rechercher
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
