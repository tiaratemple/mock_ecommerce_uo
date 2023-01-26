import React from "react";
import home from "../../assets/home.webp";
import "./Home.css";

const Home = () => {
  return (
    <img
      className="home-landing"
      src={home}
      alt="neon light heart sign on wall"
    />
  );
};

export default Home;
