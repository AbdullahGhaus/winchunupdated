import React from "react";
import CompHead from "../../../Components/CompHead";
import "../HomePage.css";
import { AiFillStar,AiOutlineDollarCircle} from "react-icons/ai";
import girl from "../../../Assets/img/businessgirl.png";
import {BiMedal} from "react-icons/bi"
function Business() {
  const business1 = [
    {
      head: "Proof Of Quality",
      desc: "Check any pro’s work samples client reviews, & identity verification.",
      img: "business1",
    },
    {
      head: "No Cost Until You Hire",
      desc: "Interview potential fits for your job, negotiate rates, & only pay for work you approve.",
      img: "business2",
    },
  ];
  const business2 = [
    {
      head: "Proof Of Quality",
      img: "business3",
    },
    {
      head: "No Cost Until You Hire",
      img: "business4",
    },
  ];
  return (
    <div className="Business">
      <CompHead
        h1="why"
        span="business"
        h2="turn to"
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text
ever since the 1500s."
      />
      <img src={girl} className="businessgirl"/>
      <div className="business_content">
        <div className="bcontent1">
          <h3>we're the world's work marketplace</h3>
          <div className="bcontent1_inner">
            <AiFillStar color="white"className="business_icons"/>
            <div className="bcontent1inner_inner">
              <h4>4.9/5</h4>
              <span>Satisfaction Rate</span>
            </div>
            </div>
            <div className="bcontent1_inner">
            <BiMedal color="white" size={45}  className="business_icons2"/>
            <div className="bcontent1inner_inner">
            <h4>Award Winner</h4>
              <span>2022 Award Winner Website Platform</span>
            </div>
            </div>      
        </div>
        <div className="bcontent2">
          {business1.map((cvalue) => (
            <div className="bcontent2_inner">
              <img src={require(`../../../Assets/img/${cvalue.img}.png`)} />
              <div className="bcontent2inner_inner">
              <h2>{cvalue.head}</h2>
              <p>{cvalue.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bcontent3">
        {business2.map((cvalue) => (
            <div className="bcontent3_inner">
              <img src={require(`../../../Assets/img/${cvalue.img}.png`)} />
              <h2>{cvalue.head}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Business;
