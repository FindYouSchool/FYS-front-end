import React from "react";

const Loader = () => {
  return (
    <div className="container">
      <div class="spinner-grow text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
