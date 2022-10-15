import React, { useState } from "react";
import CompHead from "../../../Components/CompHead";
import SignupHeader from "../../../Components/SignupHeader";
import { Link } from "react-router-dom";
import play from "../../../Assets/img/play-button.png"
import "../LoginSignup.css";
function HourlyRate() {

    const data = [
        {
            name:"Hourly Rate",
            desc:"Total amount the client will see",
        },
        {
            name:"Service Fee",
            desc:"Services fee 20% when you began a contract with a new client",
        },    
        {
            name:"You'll Recieve",
            desc:"The estimated amount you'll recieve after services fees",
        }
    ]
  return (
    <div className="Signup">
      <SignupHeader />
      <div className="Signup_cont">
        <CompHead
          h1="Lets Set Your"
          span="Hourly Rate"
          desc="To keep things safe and simple, thats why we need your personal information"
        />
        <div className="HourlyRate_inner">
            {data.map((cvalue) => {
                return <div className="rates_cont">
                    <div className="rates_cont_inner_left">
                        <h5>{cvalue.name}</h5>
                        <p>{cvalue.desc}</p>
                    </div>
                    <div className="rates_cont_inner_right">
                        
                        <div className="rates_cont_inner_right_inenr">
                        <label for="rate_input">$</label>
                        <input placeholder="0.00" type={"number"} />
                        </div>
                        <p>/hr</p>
                    </div>
                </div>
            })}
        </div>
        <p>Win-Chun Fees Can Be Low As 5%</p>
        <Link to="/">
          <button className="btn_image_withImage" style={{ fontWeight: "bold"}}>
            <img src={play} /> <p style={{margin:"0"}}>See, How it Works</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HourlyRate;
