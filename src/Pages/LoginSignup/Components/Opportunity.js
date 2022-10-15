import React from 'react'
import CompHead from '../../../Components/CompHead';
import SignupHeader from '../../../Components/SignupHeader';
import img1 from "../../../Assets/img/opp_user.png";
import img2 from "../../../Assets/img/opp_tick.png";
import img3 from "../../../Assets/img/opp_bill.png";
import {Link} from "react-router-dom"
import "../LoginSignup.css";
function Opportunity() {
  return (
    <div className='Signup'>
        <SignupHeader />
        <div className="Signup_cont">
        <CompHead h1="Hey are you ready" span="for your next opportunity"/>
        <div className="Opportunity_inner">
            <button className="OpportunityOptions">
            <img src={img1} /> Answer a few question and start building your profile
            </button>
            <button className="OpportunityOptions">
            <img src={img2} /> Apply for open roles or list services for clients to buy
            </button>
            <button className="OpportunityOptions">
            <img src={img3} />Get paid safely and know we are there to help
            </button>
        </div>
        <p>It only takes 5 to 10 minutes</p>
      <Link to="/question1"><button className='btn_image' style={{display:"inline"}}>Get Started</button></Link>
        </div>
    </div>
  )
}

export default Opportunity