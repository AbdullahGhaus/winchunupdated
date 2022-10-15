import React, { useState } from 'react'
import CompHead from '../../../Components/CompHead';
import SignupHeader from '../../../Components/SignupHeader';
import {Link} from "react-router-dom"
import img1 from "../../../Assets/img/search_serv.png";
import "../LoginSignup.css";
function Profile1() {
    const [skillselected, setskillselected] = useState([])


  return (
    <div className='Signup'>
    <SignupHeader />
    <div className="Signup_cont">
    <CompHead span="Got it. Now" h2="Add a title to tell the world" span2="what to do" desc="It's the very first thing clients see, so make it count. Satnd out by describing your expertise in your own words"/>
    <div className="Services_inner">
        <input className='input_profile' placeholder='Ex: Full Stack Developer | Web & Mobile'/>
    </div>
    <div className="third_div">
    <Link to="/service3">  <p>Back</p>    </Link>
          <Link to="/hourlyrates">
            <button className="btn_image" style={{ fontWeight: "bold" }}>
              Next, Add Your Experience
            </button>
            
          </Link>
        </div>
    </div>
</div>
  )
}

export default Profile1