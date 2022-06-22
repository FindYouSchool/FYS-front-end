import React from "react";
import { AuthProvider } from "./AuthContext";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { SearchProvider } from "./SearchContext";
const Providers = (props) => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SearchProvider>
          <AuthProvider>{props.children}</AuthProvider>
        </SearchProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default Providers;
