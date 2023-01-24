import React from "react";
import brands from "../../assets/brands.webp";
import "./Brands.css";

const Brands = () => {
  return (
    <div
      className="brands-landing"
      style={{
        background: `url(${brands})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: 275,
        width: 375,
      }}
    ></div>
  );
};

export default Brands;
