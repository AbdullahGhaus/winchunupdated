import React, { useState } from 'react'
import CompHead from '../../../Components/CompHead';
import SignupHeader from '../../../Components/SignupHeader';
import {Link} from "react-router-dom"
import img1 from "../../../Assets/img/language.png";
import "../LoginSignup.css";
function Services2() {
    const [skillselected, setskillselected] = useState([])


  return (
    <div className='Signup'>
    <SignupHeader />
    <div className="Signup_cont">
    <CompHead h1="For What services" span="you here ?" desc="Your skills show client what you can offer"/>
    <div className="Services_inner">
        <div className='ServiceInput_COnt'>
        <img src={img1} /> 
        <select
                  aria-label="Default select example"
                  required
                  id="datesedu"
                  value={skillselected} onChange={(event)=>{setskillselected([...skillselected, event.target.value])}}
                >
                  <option value={""} >Your Skills</option>
                  <option value="CSS">CSS</option>
                  <option value="React">React</option>
                  <option value="HTML">HTML</option>
                  <option value="Tailwind">Tailwind</option>
                  <option value="Node js">Node js</option>
                </select>
        </div>
        <div className='skills_cont'>
            <div className='sugg_head'>
                <p>Suggested Skills</p>
                <p>Max 15 Skills</p>
            </div>
            <div className='sugg_skills'>
                <p>Content Writing +</p>
                <p>Marketing +</p>
                <p>Content Writing +</p>
            </div>
        </div>
    </div>
  <Link to="/service3"><button className='btn_image' style={{display:"inline"}}>Next, Share Your Skills</button></Link>
    </div>
</div>
  )
}

export default Services2