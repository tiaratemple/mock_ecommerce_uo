import React from "react";
import "./NewArrivals.css";
import bagna from "../../assets/bagna.webp";
import sweaterna from "../../assets/sweaterna.webp";

const NewArrivals = () => {
  return (
    <div className="new-arrivals-container">
      <h3 className="new-arrivals-title">New Arrivals</h3>
      <span className="img-row">
        <div className="img-column-left">
          <img className="sweater" src={sweaterna} alt="sweater on hanger" />
          <p className="img-left-description">
            OBEY UO Exclusive Stars Thermal Long Sleeve Tee
          </p>
        </div>
        <div className="img-column-right">
          <img
            className="bag"
            src={bagna}
            alt="model wearing bag over shoulder"
          />
          <p className="img-right-description">Devon Studded Crossbody Bag</p>
        </div>
      </span>
    </div>
  );
};

export default NewArrivals;
