import React, { useState } from "react";
import CompHead from "../../../Components/CompHead";
import SignupHeader from "../../../Components/SignupHeader";
import { Link } from "react-router-dom";
import img1 from "../../../Assets/img/addworkexp_company.png";
import lock from "../../../Assets/img/lock.png";
import phone from "../../../Assets/img/Phone.png";
import addworkexp_flag from "../../../Assets/img/addworkexp_flag.png";
import email from "../../../Assets/img/edubusi.png";

import "../LoginSignup.css";
function HireTalent2() {
  return (
    <div className="Signup">
      <SignupHeader />
      <div className="Signup_cont">
        <CompHead
          h1="Sign up to"
          span="hire talent"
          desc="To keep things safe and simple, thats why we need your personal information"
        />
        <div className="HireTalent_inner">
          <div className="hiretalent_down">
            <div className="profile_inner_right_left">
              <div className="addworkexp_input_inner">
                <img src={email} />
                <input
                  type={"name"}
                  id="name"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="addworkexp_input_inner">
                <img src={addworkexp_flag} />
                <input
                  type={"text"}
                  id="username"
                  placeholder="User Name"
                  required
                />
              </div>
              <div className="addworkexp_input_inner">
                <img src={lock} />
                <input
                  type={"password"}
                  id="Password"
                  placeholder="Select Country"
                  required
                />
              </div>
              <div className="addworkexp_input_inner">
                <img src={lock} />
                <input
                  type={"password"}
                  id="Password"
                  placeholder="Create Password"
                  required
                />
              </div>
            </div>

            <div className="profile_inner_right_right">
              <div className="addworkexp_input_inner">
                <img src={phone} />
                <input
                  type={"text"}
                  id="Phone"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="addworkexp_input_inner">
                <img src={img1} />
                <input
                  type={"text"}
                  id="City"
                  placeholder="Enter City"
                  required
                />
              </div>
              <div className="addworkexp_input_inner">
                <img src={lock} />
                <input
                  type={"password"}
                  id="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div className="addworkexp_input_inner">
                <img src={lock} />
                <input
                  type={"password"}
                  id="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="signup_third_div">
          <button className="btn_outline" style={{ fontWeight: "bold" }}>
            <Link to="/hiretalent" className="btnImage_a">
             Previous Options
            </Link>
          </button>

          <button className="btn_image_long" style={{ fontWeight: "bold" }}>
            <Link to="/verify-email" className="btnImage_a">
              {" "}
              Next, Options{" "}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HireTalent2;
