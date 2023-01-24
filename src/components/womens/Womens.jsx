import React from "react";
import womens from "../../assets/womens.webp";
import "./Womens.css";

const Womens = () => {
  return (
    <div
      className="womens-landing"
      style={{
        background: `url(${womens})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: 275,
        width: 375,
      }}
    ></div>
  );
};

export default Womens;
