import React, { useState } from 'react'
import CompHead from '../../../Components/CompHead';
import SignupHeader from '../../../Components/SignupHeader';
import {Link} from "react-router-dom"
import img1 from "../../../Assets/img/ques1img1.png";
import img2 from "../../../Assets/img/ques1img2.png";
import img3 from "../../../Assets/img/ques1img3.png";
import "../LoginSignup.css";
function Question1() {
    const [styletoggle, setstyletoggle] = useState(0);
  return (
    <div className='Signup'>
    <SignupHeader />
    <div className="Signup_cont">
    <CompHead h1="A few quick" span="question" desc="Have you Freelanced Before?"/>
    <div className="Question_inner">
        <button className={styletoggle === 1? "QuestionOptions_active":"QuestionOptions"} onClick={()=>{setstyletoggle(1)}}>
        <img src={img1} /> Nope; Its new to me
        </button>
        <button className={styletoggle === 2? "QuestionOptions_active":"QuestionOptions"} onClick={()=>{setstyletoggle(2)}}>
        <img src={img2} /> I’ve tried it but still might need tips
        </button>
        <button className={styletoggle === 3? "QuestionOptions_active":"QuestionOptions"} onClick={()=>{setstyletoggle(3)}}>
        <img src={img3} /> Yep; I’ve freelanced for years
        </button>
    </div>
    <p>We’ll Send You a text with a code to enter</p>
  <Link to="/question2"><button className='btn_image' style={{display:"inline"}}>Continue</button></Link>
    </div>
</div>
  )
}

export default Question1