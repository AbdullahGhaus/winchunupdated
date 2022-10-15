import React, { useState } from "react";
import CompHead from "../../../Components/CompHead";
import SignupHeader from "../../../Components/SignupHeader";
import { Link } from "react-router-dom";
import play from "../../../Assets/img/play-button.png"
import {BsGoogle,BsApple} from "react-icons/bs";
import img1 from "../../../Assets/img/addworkexp_company.png";
import userimage from "../../../Assets/img/user_dummy.png";
import city from "../../../Assets/img/city.png";
import lock from "../../../Assets/img/lock.png";
import address from "../../../Assets/img/address.png";
import earth from "../../../Assets/img/earth.png";
import phone from "../../../Assets/img/Phone.png";
import addworkexp_flag from "../../../Assets/img/addworkexp_flag.png";
import email from "../../../Assets/img/edubusi.png";


import "../LoginSignup.css";
function HireTalent1() {

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
            <div className="hiretalent_top">
                <div className="hiretalent_link_apple"><BsApple className="hiretalent_icon_apple"/><p>Continue With Apple</p></div>
                <div className="hiretalent_link_google">     <BsGoogle className="hiretalent_icon_google"/><p>Continue With Google</p></div>
            </div>
            <div className="hiretalent_down">
           
            <div className="profile_inner_right_left">
              <div className="addworkexp_input_inner">
                <img src={email} />
                <input
                  type={"email"}
                  id="email"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="addworkexp_input_inner">
                <img src={addworkexp_flag} />
                <input
                  type={"text"}
                  id="Country"
                  placeholder="Enter Country"
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


            </div>
         
            </div>
        </div>
        <Link to="/hiretalent2">
          <button className="btn_image" style={{ fontWeight: "bold"}}>
           Next, Options
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HireTalent1;
