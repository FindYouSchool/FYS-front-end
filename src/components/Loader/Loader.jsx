import React from "react";

const Loader = (props) => {
  const size = {
    sm: "2rem",
    large: "3rem",
    xl: "4rem",
  };
  return (
    <div
      style={{ marginTop: "10%" }}
      className="container d-flex w-100 justify-content-center align-items-center"
    >
      <div
        style={{ width: size[props.size], height: size[props.size] }}
        className="spinner-border text-primary m-5"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
