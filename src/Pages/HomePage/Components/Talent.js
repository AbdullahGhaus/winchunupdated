import React from 'react'
import "../HomePage.css"
import {HiOutlineAcademicCap} from "react-icons/hi";
import {FaHammer} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai"
import circle1 from "../../../Assets/img/talent-ellipse-1.png";
import circle2 from "../../../Assets/img/talent-ellipse-2.png";
import circle3 from "../../../Assets/img/talent-ellipse-3.png";
function Talent() {
    const talentdata = [
        {
            name:"Category name goes here",
            skills:"1,853",
            rating:"4.85",
            Icon:"HiOutlineAcademicCap"
        },
        {
            name:"Category name goes here",
            skills:"1,853",
            rating:"4.85",
            Icon:"HiOutlineAcademicCap"
        },
        {
            name:"Category name goes here",
            skills:"1,853",
            rating:"4.85",
            Icon:"HiOutlineAcademicCap"
        },
        {
            name:"Category name goes here",
            skills:"1,853",
            rating:"4.85",
            Icon:"HiOutlineAcademicCap"
        },
        {
            name:"Category name goes here",
            skills:"1,853",
            rating:"4.85",
            Icon:"HiOutlineAcademicCap"
        },
        {
            name:"Category name goes here",
            skills:"1,853",
            rating:"4.85",
            Icon:"HiOutlineAcademicCap"
        },
    ]
  return (
    <div className='Talent'>
        <div className="talent_head">
        <h1>browse <span>talent by</span> category</h1>
        <p>Placeholder text is the label for possible content in a text box</p>
        </div>
        <div className="talent_content">
        <img src={circle1} className="talent_circle1"/>
        <img src={circle2} className="talent_circle2"/>
        {talentdata.map(Cvalue => <div className='Talent_box'>
        <HiOutlineAcademicCap className="talent_box_icon"/>
        <h3>{Cvalue.name}</h3>
        <div className='talent_box_inner'>
            <div className="talent_rating"><AiFillStar /><span>{Cvalue.rating}/5</span></div>
            <div className="talent_skills"><FaHammer /><span>{Cvalue.rating} skills</span></div>
        </div>
        </div>)}
        <img src={circle3} className="talent_circle3"/>
        </div>
        <button className="btn_image">Browse Jobs</button>
    </div>
  )
}

export default Talent