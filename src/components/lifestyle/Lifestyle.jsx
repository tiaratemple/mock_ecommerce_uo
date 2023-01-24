import React from "react";
import lifestyle from "../../assets/lifestyle.webp";
import "./Lifestyle.css";

const Lifestyle = () => {
  return (
    <div
      className="lifestyle-landing"
      style={{
        background: `url(${lifestyle})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: 275,
        width: 375,
      }}
    ></div>
  );
};

export default Lifestyle;
