import React from "react";
import mens from "../../assets/mens.webp";
import "./Mens.css";

const Mens = () => {
  return (
    <div
      className="mens-landing"
      style={{
        background: `url(${mens})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: 275,
        width: 375,
      }}
    ></div>
  );
};

export default Mens;
