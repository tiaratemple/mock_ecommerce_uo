import React from "react";
import "./MostPopular.css";
import corsetmp from "../../assets/corsetmp.webp";
import shirtmp from "../../assets/shirtmp.webp";

const MostPopular = () => {
  return (
    <div className="popular-container">
      <h3 className="popular-title">Most Popular</h3>
      <span className="img-row">
        <div className="img-column-left">
          <img className="corset" src={corsetmp} alt="model in corset" />
          <p className="img-left-description">
            Out From Under Modern Love Corset
          </p>
        </div>
        <div className="img-column-right">
          <img className="shirt" src={shirtmp} alt="model in shirt" />
          <p className="img-right-description">
            Out From Under Go For Gold Seamless Top
          </p>
        </div>
      </span>
    </div>
  );
};

export default MostPopular;
