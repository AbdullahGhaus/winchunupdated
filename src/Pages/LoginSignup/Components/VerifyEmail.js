import React, { useState } from "react";
import CompHead from "../../../Components/CompHead";
import SignupHeader from "../../../Components/SignupHeader";
import { Link } from "react-router-dom";
import proceedemail from "../../../Assets/img/emailproceed.png"

import "../LoginSignup.css";
function VerifyEmail() {
  return (
    <div className="Signup">
      <SignupHeader />

      <div className="Signup_cont_centered">
        <img src={proceedemail} className="verifyemail_image" />
        <CompHead
          h1="Verify Your Email to proceed"
        />
        <div style={{margin:"-50px 0", color:"white"}}>
        <p>We just sent an email to the address:</p>
        <p>dummyemail@company.com</p>
        <p>Please check your email and click on the link provided to verify your address.</p>
        </div>
        <div className="verifyEmail">
          <div className="verifyEmail_inner">
            <button className="dark_halfborder">Change Email Address</button>
            <button className="dark_halfborder">I Need Help Verifying My Email </button>
          </div>
          <div className="verifyEmail_inner">
          <button className="dark_halfborder">Resend Verification Email</button>
         <Link to="/experience"> <button className="dark_halfborder">Resend Verification Email</button></Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default VerifyEmail;
