import React from "react";
import "./Header.css";
import { TfiSearch } from "react-icons/tfi";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <header>
      <div className="global-header-container">
        <h2 className="global-header">URBAN OUTFITTERS</h2>
      </div>
      <div className="global-header-row-two">
        <span className="search-bar">
          <input type="text" placeholder="Search" />
          <TfiSearch />
        </span>
        <div className="row-two-right-container">
          <IoBagOutline className="header-icon" />
          <RxHamburgerMenu className="header-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
