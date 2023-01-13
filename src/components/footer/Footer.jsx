import React from "react";
import "./Footer.css";

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
    </footer>
  );
}

export default Footer;
