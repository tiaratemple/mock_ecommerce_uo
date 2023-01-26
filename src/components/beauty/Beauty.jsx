import React from "react";
import beauty from "../../assets/beauty.webp";
import "./Beauty.css";

const Beauty = () => {
  return (
    <img
      className="beauty-landing"
      src={beauty}
      alt="model applying lipstick"
    />
  );
};

export default Beauty;
