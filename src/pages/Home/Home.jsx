import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "1500px" }}>
      <h1>Welcome to the homepage!</h1>
    </div>
  );
};

export default Home;
