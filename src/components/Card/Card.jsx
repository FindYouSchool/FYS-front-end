import React from "react";
import ReactStars from "react-rating-stars-component";
import "./card.css";

const Card = ({ school }) => {
  console.log(school.logo);
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-overlay">
          <img src={school.logo} className="card-logo" alt="" />
          <ReactStars
            edit={false}
            onChange={() => {}}
            count={5}
            value={school.rating}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            size={30}
            isHalf={true}
            color="#839AA8"
            activeColor="white"
          />
        </div>
      </div>
      <div className="card-content">
        <div className="card-title">{school.name}</div>
        <p className="card-description">{school.description}</p>
      </div>
    </div>
  );
};

export default Card;
