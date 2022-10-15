import React from 'react';
import CompHead from '../../Components/CompHead';
import SignupHeader from '../../Components/SignupHeader';
import "./LoginSignup.css";
import img1 from "../../Assets/img/createaccimg1.png"
import img2 from "../../Assets/img/createaccimg2.png"
import email from "../../Assets/img/edubusi.png";
import Phone from "../../Assets/img/Phone.png";
import addworkexp_flag from "../../Assets/img/addworkexp_flag.png";


import {Link} from "react-router-dom"
function Signup() {
  return (
    <div className='Signup'>
        <SignupHeader />
        <div className='Signup_cont'>
          <CompHead h1="join as a" span="client" h2="or as a" span2="freelancer" desc="Placeholder text is the label for possible content in a text box"/>
          <div className='signup_options'>
          <Link to="/hiretalent">  <div className='signupoptions_inner'>
            <img src={img1} />
            <h4>I'm a client, hiring for a project</h4>
          </div></Link>
         <Link to="/opportunity"> <div className='signupoptions_inner'>
            <img src={img2} />
            <h4>I'm a freelancer, looking for work</h4>
          </div></Link>
          </div>
          <p>Create Account</p>
          <p>Already Have An Account? <span>Login</span></p>
        </div>
    </div>
  )
}

export default Signup