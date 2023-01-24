import React from "react";
import beauty from "../../assets/beauty.webp";
import "./Beauty.css";

const Beauty = () => {
  return (
    <div
      className="beauty-landing"
      style={{
        background: `url(${beauty})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: 275,
        width: 375,
      }}
    ></div>
  );
};

export default Beauty;
