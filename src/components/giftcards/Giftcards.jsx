import React from "react";
import giftcards from "../../assets/giftcards.webp";
import "./Giftcards.css";

const Giftcards = () => {
  return (
    <div
      className="giftcards-landing"
      style={{
        background: `url(${giftcards})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: 130,
        width: 375,
      }}
    ></div>
  );
};

export default Giftcards;
