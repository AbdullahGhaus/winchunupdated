import React from "react";
import "./Components.css";
import logo from "../Assets/img/logo.png";
import { Link } from "react-router-dom";
function SignupHeader() {
  return (
    <div className="SignupHeader">
      <img src={logo} />
      <div className="shinner">
        <p>
          Looking for work? <strong>Apply As Talent</strong>
        </p>
      </div>
    </div>
  );
}

export default SignupHeader;
