import React from "react";
import giftcards from "../../assets/giftcards.webp";
import "./Giftcards.css";

const Giftcards = () => {
  return (
    <img
      className="giftcards-landing"
      src={giftcards}
      alt="colors in tie-dye pattern"
    />
  );
};

export default Giftcards;
