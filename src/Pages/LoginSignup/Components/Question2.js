import React, { useState } from 'react'
import CompHead from '../../../Components/CompHead';
import SignupHeader from '../../../Components/SignupHeader';
import {Link} from "react-router-dom"
import img1 from "../../../Assets/img/ques2img1.png";
import img2 from "../../../Assets/img/ques2img2.png";
import img3 from "../../../Assets/img/ques1img3.png";
import img4 from "../../../Assets/img/ques2img4.png";
import "../LoginSignup.css";
function Question2() {
    const [styletoggle, setstyletoggle] = useState(0);

  return (
    <div className='Signup'>
    <SignupHeader />
    <div className="Signup_cont">
    <CompHead h1="A few quick" span="question" desc="Whats Your Biggest Goal For Freelancing?"/>
    <div className="Question_inner">
        <button className={styletoggle === 1? "QuestionOptions_active":"QuestionOptions"} onClick={()=>{setstyletoggle(1)}}>
        <img src={img3} /> To earn my main income
        </button>
        <button className={styletoggle === 2? "QuestionOptions_active":"QuestionOptions"} onClick={()=>{setstyletoggle(2)}}>
        <img src={img4} /> Take money on the side
        </button>
        <button className={styletoggle === 3? "QuestionOptions_active":"QuestionOptions"} onClick={()=>{setstyletoggle(3)}}>
        <img src={img2} /> To get experience so i can find full-time job
        </button>
        <button className={styletoggle === 4? "QuestionOptions_active":"QuestionOptions"} onClick={()=>{setstyletoggle(4)}}>
        <img src={img1} /> I don’t have any goal yet
        </button>
    </div>
    
  <Link to="/liketowork"><button className='btn_image' style={{display:"inline"}}>Skip For Now</button></Link>
    </div>
</div>
  )
}

export default Question2