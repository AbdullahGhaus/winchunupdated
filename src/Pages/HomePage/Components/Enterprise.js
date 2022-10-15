import React from "react";
import "../HomePage.css";
import { RiUserSettingsLine } from "react-icons/ri";
import { TbHierarchy } from "react-icons/tb";
import { BsBriefcase } from "react-icons/bs";
import image from "../../../Assets/img/enterpriseimg.webp";
function Enterprise() {
  const enterprisedata = [
    {
      head: "access",
      desc: "Access expert talent to fill your skills gaps",
      Icon: RiUserSettingsLine,
    },
    {
      head: "Control Your Workflow",
      desc: "Hire, classify and pay your talent",
      Icon: TbHierarchy,
    },
    {
      head: "Partner",
      desc: "Partner with Upwork for end-to-end support",
      Icon: BsBriefcase,
    },
  ];
  return (
    <div className="Enterprise">
      <img className="enterprise_img" src={image} />
      <div className="enterprise_content">
        <span>for enterprise</span>
        <h1>
          scale with <span>Enterprise Suite</span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="enterprise_arr">
        {enterprisedata.map((Cvalue) => (
            <div className="entcontent_inner">
            <Cvalue.Icon className="enterprise_icon" color="white"/>
            <div className="entcontentinner_inner">
              <h4>{Cvalue.head}</h4>
              <p>{Cvalue.desc}</p>
            </div>
            </div>
        ))}
         </div>
        <button className="btn_image" style={{marginTop:"20px"}}>Learn More</button>
      </div>
    </div>
  );
}

export default Enterprise;
