import React, { useContext, useState } from "react";

const SEARCH_DEFAULT = {
  search: "",
  filters: {},
  setSearch: () => {},
  setFilters: () => {},
};
export const SearchContext = React.createContext(SEARCH_DEFAULT);

export const SearchProvider = (props) => {
  const [search, setSearch] = useState(SEARCH_DEFAULT.search);
  const [filters, setFilters] = useState(SEARCH_DEFAULT.filters);
  return (
    <SearchContext.Provider value={{ search, filters, setSearch, setFilters }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
