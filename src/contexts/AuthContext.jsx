import React, { useContext, useState } from "react";

const AUTH_DEFAULT = {
  isAuthenticated: false,
  token: null,
  currentUser: {
    id: "",
    name: "string",
  },
  setCurrentUser: () => {},
  setIsAuthenticated: () => {},
  setToken: () => {},
};
export const AuthContext = React.createContext(AUTH_DEFAULT);

export const AuthProvider = (props) => {
  const [token, setToken] = useState(AUTH_DEFAULT.token);
  const [isAuthenticated, setIsAuthenticated] = useState(
    AUTH_DEFAULT.isAuthenticated
  );
  const [currentUser, setCurrentUser] = useState(AUTH_DEFAULT.currentUser);
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        setCurrentUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
