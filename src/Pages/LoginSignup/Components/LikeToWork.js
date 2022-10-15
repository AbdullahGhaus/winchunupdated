import React, { useState } from "react";
import CompHead from "../../../Components/CompHead";
import SignupHeader from "../../../Components/SignupHeader";
import img1 from "../../../Assets/img/opp_user.png";
import img2 from "../../../Assets/img/opp_tick.png";
import img3 from "../../../Assets/img/opp_bill.png";
import { Link } from "react-router-dom";
import "../LoginSignup.css";
function LikeToWork() {
  const [styletoggle, setstyletoggle] = useState(null);
  console.log(styletoggle)
  const data = [
    {
      img: "liketoworkimg1",
      head: "I'd Like To Find Opportunities Myself",
      desc: "I'd like to find opportunities myself Clients post jobs on our Talent Marketplace.  you can browse & bid for them, or get invited by a client. ",
    },
    {
      img: "liektoworkimg2",
      head: "I'd like to package up my work for clients to buy",
      desc: "Define your service with pricesand timelines: we'll list it in our Project Catalog- for clients to buy right away. ",
    },
    {
      img: "liektoworkimg3",
      head: "I'd like platform to act as a recruiter",
      desc: "Once you've been here for a while, our Talent Scout. service might recruit you directly for a client.",
    },
  ];
  return (
    <div className="Signup">
      <SignupHeader />
      <div className="Signup_cont">
        <CompHead
          h1="how would you"
          span="like to work?"
          desc="Placeholder text is the label for possible content in a text box"
        />
        <div className="LikeToWork_inner">
            {data.map((cvalue,index) => <>
          <button
            className={
              styletoggle === index
                ? "LikeToWorkOptions_active"
                : "LikeToWorkOptions"
            }
            onClick={() => {
              setstyletoggle(index);
            }}
          >
            <img src={require(`../../../Assets/img/${cvalue.img}.png`)} className="liketoworkimg"/> 
            <h4>{cvalue.head}</h4>
            <p>{cvalue.desc}</p>
          </button>
          </>)}
        </div>
        <div className="signup_third_div">
          <p>Skip For Now</p>
          <Link to="/experience">
            <button className="btn_image" style={{ fontWeight: "bold" }}>
              Next, Create A Profile
            </button>
            
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LikeToWork;
