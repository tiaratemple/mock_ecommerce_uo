import React from "react";
import "./Footer.css";
import { TbBuildingWarehouse } from "react-icons/tb";
import { BsEnvelope } from "react-icons/bs";
import { SlScreenSmartphone } from "react-icons/sl";
import { HiOutlinePlus } from "react-icons/hi";

function Footer() {
  return (
    <footer>
      <div className="signup-container">
        <h3 className="footer-sign-up">Sign Up for Email</h3>
        <p className="footer-sign-up-details">
          Sign up to receive Urban Outfitters emails and get first dibs on new
          arrivals, sales, exclusive content, events and more!
        </p>
        <label for="email-sign-up">Email Address*</label>
        <input id="email-signup-email" type="email" required="required"></input>
        <button className="signup-submit-btn">Submit</button>
        <p className="disclaimer">
          By entering your email address, you agree to receive Urban Outfitters
          offers, promotions, other commercial messages. You can view our
          Privacy Policy here and you may unsubscribe at any time.
        </p>
      </div>
      <div className="store-email-texts-container">
        <div className="store-section">
          <TbBuildingWarehouse className="store-icon" />
          <h4 className="store-locator">Store Locator</h4>
        </div>
        <div className="email-section">
          <BsEnvelope className="email-icon" />
          <h4 className="suf-email">Sign Up For Email</h4>
        </div>
        <div className="texts-section">
          <SlScreenSmartphone className="phone-icon" />
          <h4 className="suf-texts">Sign Up For Texts</h4>
        </div>
      </div>
      <div className="help-ql-extras-container">
        <div className="help-section">
          <h4 className="help">Help</h4>
          <HiOutlinePlus className="plus-icon" />
        </div>
        <div className="ql-section">
          <h4 className="ql">Quick Links</h4>
          <HiOutlinePlus className="plus-icon" />
        </div>
        <div className="extras-section">
          <h4 className="extras">Extras</h4>
          <HiOutlinePlus className="plus-icon" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
