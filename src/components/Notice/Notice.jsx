import React from "react";
import "./notice.css";
import ReactStars from "react-rating-stars-component";

const Notice = ({ notice }) => {
  console.log(notice);
  return (
    <div className="notice-container">
      <div className="author-info">
        <img
          alt="author avatar"
          src={notice.author?.avatar}
          className="notice-avatar"
        />
        <div className="notice-author">
          {notice.author?.firstName} {notice.author?.LastName}
        </div>
      </div>
      <ReactStars
        edit={false}
        onChange={() => {}}
        count={5}
        value={3}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        size={24}
        isHalf={true}
        activeColor="#2951e0"
      />
      <div className="notice-comment">{notice.comment}</div>
    </div>
  );
};

export default Notice;
