import React from "react";
import { AuthProvider } from "./AuthContext";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
const Providers = (props) => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>{props.children}</AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default Providers;
