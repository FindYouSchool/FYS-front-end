import React, { useContext, useState } from "react";

const AUTH_DEFAULT = {
  isAuthenticated: false,
  token: null,
  userInfo: {
    id: null,
    username: null,
    avatar: null,
    email: null,
    roles: [1155, 1166],
  },
  setUserInfo: () => {},
  setIsAuthenticated: () => {},
  setToken: () => {},
  disconnect: () => {},
};
export const AuthContext = React.createContext(AUTH_DEFAULT);

export const AuthProvider = (props) => {
  const [token, setToken] = useState(AUTH_DEFAULT.token);
  const [isAuthenticated, setIsAuthenticated] = useState(
    AUTH_DEFAULT.isAuthenticated
  );
  const [userInfo, setUserInfo] = useState(AUTH_DEFAULT.userInfo);
  const disconnect = () => {
    setToken(null);
    setUserInfo(null);
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        isAuthenticated,
        setIsAuthenticated,
        userInfo,
        setUserInfo,
        disconnect,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
