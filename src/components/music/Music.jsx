import React from "react";
import music from "../../assets/music.webp";
import "./Music.css";

const Music = () => {
  return (
    <img
      className="music-landing"
      src={music}
      alt="record, speaker, radio, microphone"
    />
  );
};

export default Music;
