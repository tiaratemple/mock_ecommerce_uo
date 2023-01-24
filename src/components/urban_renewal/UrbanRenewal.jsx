import React from "react";
import urban_renew from "../../assets/urban_renew.webp";
import "./UrbanRenewal.css";

const UrbanRenewal = () => {
  return (
    <div
      className="urban-renewal-landing"
      style={{
        background: `url(${urban_renew})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: 275,
        width: 375,
      }}
    ></div>
  );
};

export default UrbanRenewal;
