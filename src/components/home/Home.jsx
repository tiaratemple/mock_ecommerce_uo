import React from "react";
import home from "../../assets/home.webp";
import "./Home.css";

const Home = () => {
  return (
    <div
      className="home-landing"
      style={{
        background: `url(${home})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: 275,
        width: 375,
      }}
    ></div>
  );
};

export default Home;
