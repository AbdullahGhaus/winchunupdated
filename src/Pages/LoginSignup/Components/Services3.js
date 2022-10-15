import React, { useState } from 'react'
import CompHead from '../../../Components/CompHead';
import SignupHeader from '../../../Components/SignupHeader';
import {Link} from "react-router-dom"
import img1 from "../../../Assets/img/search_serv.png";
import "../LoginSignup.css";
function Services3() {
    const [skillselected, setskillselected] = useState([])


  return (
    <div className='Signup'>
    <SignupHeader />
    <div className="Signup_cont">
    <CompHead h1="What services" span="you Offer ?" desc="Choose atleast 1 service that describes you best"/>
    <div className="Services_inner">
        <div className='ServiceInput_COnt'>
        <img src={img1} /> 
        <select
                  aria-label="Default select example"
                  required
                  id="datesedu"
                  value={skillselected} onChange={(event)=>{setskillselected([...skillselected, event.target.value])}}
                >
                  <option value={""} >Search for a service</option>
                  <option value="CSS">CSS</option>
                  <option value="React">React</option>
                  <option value="HTML">HTML</option>
                  <option value="Tailwind">Tailwind</option>
                  <option value="Node js">Node js</option>
                </select>
        </div>
        <div className='skills_cont'>
            <div className='sugg_head' style={{justifyContent:"center"}}>
                <p>Suggested Skills</p>
            </div>
            <div className='sugg_skills'>
                <p>Content Writing +</p>
                <p>Marketing +</p>
                <p>Content Writing +</p>
            </div>
        </div>
    </div>
  <Link to="/profile1"><button className='btn_image' style={{display:"inline"}}>Next, Share Your Skills</button></Link>
    </div>
</div>
  )
}

export default Services3