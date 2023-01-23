import React from "react";
import "./Footer.css";
import { TbBuildingWarehouse } from "react-icons/tb";
import { BsEnvelope } from "react-icons/bs";
import { SlScreenSmartphone } from "react-icons/sl";
import { HiOutlinePlus } from "react-icons/hi";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { BsFacebook } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { CgCopyright } from "react-icons/cg";

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
      <div className="app-btns-row">
        <div className="apple-app-btn">
          <div className="apple-icon-section">
            <AiFillApple className="apple-icon" />
          </div>
          <div className="apple-app-btn-text">
            <p className="tiny-top-text">Download on the</p>
            <p className="large-bottom-text">App Store</p>
          </div>
        </div>
        <div className="google-play-btn">
          <div className="google-play-icon-section">
            <FaGooglePlay className="google-play-icon" />
          </div>
          <div className="google-play-btn-text">
            <p className="tiny-top-text">GET IT ON</p>
            <p className="large-bottom-text">Google Play</p>
          </div>
        </div>
      </div>
      <div className="social-icons-section-top">
        <RxInstagramLogo className="ig-icon" />
        <BsFacebook className="fb-icon" />
        <FaPinterest className="pin-icon" />
        <BsTwitter className="twitter-icon" />
      </div>
      <div className="social-icons-section-bottom">
        <FaTiktok className="tik-icon" />
        <BsYoutube className="yt-icon" />
        <BsSpotify className="spot-icon" />
      </div>
      <div className="priv-terms-etc-section">
        <div className="priv-terms-transp-row">
          <p className="pp">Privacy Policy</p>
          <p className="line">|</p>
          <p className="terms">Terms of Use</p>
          <p className="line">|</p>
          <p className="ca-transp">CA Transparency</p>
          <p className="line">|</p>
        </div>
        <div className="access-urbn-res-row">
          <p className="access">Accessibility</p>
          <p className="line">|</p>
          <p className="urbn">URBN.com</p>
          <p className="line">|</p>
          <p className="ca-res">For CA Residents</p>
        </div>
      </div>
      <div className="copyright-section">
        <CgCopyright />
        <p className="copyright">2023 Urban Outfitters All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
