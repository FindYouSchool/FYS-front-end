import React from "react";

const Button = ({ children, onClick, size, color }) => {
  return (
    <button onClick={onClick} type="button" className={`btn btn-${color}`}>
      {children}
    </button>
  );
};

export default Button;
