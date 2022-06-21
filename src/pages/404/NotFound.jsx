import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center text-center flex-column"
    >
      <h1>404</h1>
      <h2>
        Page
        <span style={{ color: "red" }}>{location.pathname}</span> introuvable
      </h2>
    </div>
  );
};

export default NotFound;
