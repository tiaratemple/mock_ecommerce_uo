import React from "react";
import music from "../../assets/music.webp";
import "./Music.css";

const Music = () => {
  return (
    <div
      className="music-landing"
      style={{
        background: `url(${music})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: 275,
        width: 375,
      }}
    ></div>
  );
};

export default Music;
