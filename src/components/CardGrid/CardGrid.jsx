import React from "react";
import Card from "../Card/Card";
import "./cardgrid.css";

const CardGrid = ({ schools }) => {
  if (!schools || schools.length === 0) {
    return <h3 className="mt-5">Aucune école n'a été trouvée.</h3>;
  }
  return (
    <div className="cardgrid-container">
      {schools.map((school, key) => {
        return <Card school={school} key={key} />;
      })}
    </div>
  );
};

export default CardGrid;
