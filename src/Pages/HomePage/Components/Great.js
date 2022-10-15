import React from "react";
import "../HomePage.css";
import image from "../../../Assets/img/greatimg.webp"
function Great() {
  const greatdata = [
    {
      desc: "Find opportunities for every stage of your freelance career.",
    },
    {
      desc: "Control when, where, and how you work.",
    },
    {
      desc: "Explore different ways to earn.",
    },
  ];
  return (
    <div className="great">
      <img className="great_img" src={image} />
      <div className="great_content">
        <span>for talent</span>
        <h1>
          find <span>great</span> work
        </h1>
        <p>
          Meet clients you’re excited to work with and take your career or
          business to new heights.
        </p>
        <div className="great_arr">
          {greatdata.map((Cvalue) => (  
               <div className="great_arr_inner"> <p>{Cvalue.desc}</p></div>
          ))}
        </div>
        <button className="btn_image" style={{ marginTop: "20px" }}>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Great;
