import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import ReactStars from "react-rating-stars-component";
import { useSchool } from "../../queries/schools/schools.query";
import "./schoolsheet.css";
const SchoolSheet = () => {
  const { data: school, isLoading, isError, error } = useSchool();
  const [activeTabItem, setActiveTabItem] = useState();
  const tabItems = [
    { id: 1, pathname: "overview", text: "Présentation" },
    { id: 2, pathname: "notice", text: "Avis" },
    { id: 3, pathname: "education", text: "Formation" },
    { id: 4, pathname: "contact", text: "Contact" },
  ];
  const handleTabClick = (event, id) => {
    setActiveTabItem(id);
  };
  useEffect(() => {
    if (isError) {
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [isError, error]);
  if (isLoading) {
    return <Loader size="large" />;
  }
  if (!school.id) {
    return (
      <div className="container">
        <h2>Erreur lors du chargement des informations de l'école.</h2>
      </div>
    );
  }
  return (
    <div>
      <div className="school-header">
        <div className="school-header-overlay">
          <div className="school-infos-container">
            <img src={school.logo} className="school-logo" alt="" />
            <div className="school-infos">
              <h3 className="school-title">{school.name}</h3>
              <ReactStars
                style={{ marginLeft: "-50px" }}
                edit={false}
                onChange={() => {}}
                count={5}
                value={school.rating}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                size={24}
                isHalf={true}
                activeColor="white"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="school-tab-container">
        <ul className="school-tab-menu">
          {tabItems.map((val, key) => (
            <NavLink
              key={key}
              to={val.pathname}
              className={`school-tab-item ${
                activeTabItem === val.id && "active"
              }`}
              onClick={(event) => handleTabClick(event, val.id)}
            >
              {val.text}
            </NavLink>
          ))}
        </ul>
      </div>
      <Outlet context={school} />
    </div>
  );
};

export default SchoolSheet;
