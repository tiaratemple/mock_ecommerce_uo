import React from "react";
import "./Community.css";
import uo_community from "../../assets/uo_community.webp";
import uo_community_nick from "../../assets/uo_community_nick.webp";
import vector from "../../assets/vector.webp";

const Community = () => {
  return (
    <div className="community-container">
      <img
        className="graphics"
        src={uo_community}
        alt="urban outfitters community platform graphics"
      />
      <img
        className="nick"
        src={uo_community_nick}
        alt="members in nickelodeon/uo shirts"
      />
      <img
        className="vector"
        src={vector}
        alt="vector graphic with rewards sign up/join now"
      />
    </div>
  );
};

export default Community;
