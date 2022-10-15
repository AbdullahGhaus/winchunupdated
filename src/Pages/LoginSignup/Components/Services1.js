import React, { useState } from 'react'
import CompHead from '../../../Components/CompHead';
import SignupHeader from '../../../Components/SignupHeader';
import {Link} from "react-router-dom"
import img1 from "../../../Assets/img/language.png";
import img2 from "../../../Assets/img/ques1img2.png";
import img3 from "../../../Assets/img/ques1img3.png";
import "../LoginSignup.css";
function Services1() {
    const [styletoggle, setstyletoggle] = useState(0);
    const [LangArr, setLangArr] = useState([]);
    console.log(LangArr);
    const LangArr2 = [];
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
                >
                  <option className="option">Language</option>
                  <option value="1">a</option>
                  <option value="2">b</option>
                  <option value="3">c</option>
                  <option value="4">d</option>
                  <option value="5">e</option>
                  <option value="6">f</option>
                  <option value="7">g</option>
                </select>
        </div>
        <div className='ServiceInput_COnt'>
        <img src={img1} /> 
        <select
                  aria-label="Default select example"
                  required
                  id="datesedu"
                >
                  <option className="option">Proficiency</option>
                  <option value="1">a</option>
                  <option value="2">b</option>
                  <option value="3">c</option>
                  <option value="4">d</option>
                  <option value="5">e</option>
                  <option value="6">f</option>
                  <option value="7">g</option>
                </select>
        </div>
        <div className='Language_add'>
            {LangArr.map((cvalue) => <>{cvalue}</>)}
        </div>
        <p className='Add_Lang' onClick={()=>{
           const push = 
           <div className='dummy_add'>
            <div className='ServiceInput_COnt' key="language">
            <img src={img1} /> 
            <select
                  aria-label="Default select example"
                  required
                  id="datesedu"
                >
                  <option className="option">Language</option>
                  <option value="1">a</option>
                  <option value="2">b</option>
                  <option value="3">c</option>
                  <option value="4">d</option>
                  <option value="5">e</option>
                  <option value="6">f</option>
                  <option value="7">g</option>
                </select>
            </div>
            <div className='ServiceInput_COnt'>
        <img src={img1} /> 
        <select
                  aria-label="Default select example"
                  required
                  id="datesedu"
                >
                  <option className="option">Proficiency</option>
                  <option value="1">a</option>
                  <option value="2">b</option>
                  <option value="3">c</option>
                  <option value="4">d</option>
                  <option value="5">e</option>
                  <option value="6">f</option>
                  <option value="7">g</option>
                </select>
        </div>
            </div>
            setLangArr([...LangArr, push])
        }}>+ Add Language</p>

    
    </div>
  <Link to="/service2"><button className='btn_image' style={{display:"inline"}}>Next, Share Your Skills</button></Link>
    </div>
</div>
  )
}

export default Services1