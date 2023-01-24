import React from "react";
import sale from "../../assets/sale.webp";
import "./Sale.css";

const Sale = () => {
  return (
    <div
      className="sale-landing"
      style={{
        background: `url(${sale})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: 130,
        width: 375,
      }}
    ></div>
  );
};

export default Sale;
