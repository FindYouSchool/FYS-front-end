import React, { useState } from "react";
import { useSearch } from "../../contexts/SearchContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./searchBar.css";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const { setSearch } = useSearch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const regExp = /[a-zA-Z]/g;
    if (regExp.test(input)) {
      setSearch(input);
      navigate("/search");
    } else {
      toast.warn("Veuillez renseignez un nom d'école", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="searchbar-container">
      <form>
        <input
          className="searchbar-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
