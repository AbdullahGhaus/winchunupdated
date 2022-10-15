import React from "react";
import { useState } from "react";
import Header from "../../../Components/Header";
import "../HomePage.css";
import { BsChevronDoubleRight } from "react-icons/bs";
import circle1 from "../../../Assets/img/banner-ellipse-1.webp";
import circle2 from "../../../Assets/img/banner-ellipse-2.webp";
function Banner() {
  const [tabtoggle, settabtoggle] = useState(0);
  const bannertabsdata = [
    {
      id: 0,
      head: "Development & IT",
    },
    {
      id: 1,
      head: "Design & Creative",
    },
    {
      id: 2,
      head: "Sales & MArketing",
    },
    {
      id: 3,
      head: "Writing & Translation",
    },
    {
      id: 4,
      head: "Admin & Customer Support",
    },
    {
      id: 5,
      head: "More",
    },
  ];
  console.log(tabtoggle);
  return (
    <div className="Banner">
      <Header />
      <img className="banner_circle1" src={circle1} />
      <img className="banner_circle2" src={circle2} />
      <div className="banner_box">
        <div className="bannertabs">
          {bannertabsdata.map((cvalue) => (
            <>
              {cvalue.head === "More" ? (
                <a>
                  <p
                    onClick={() => {
                      settabtoggle(cvalue.id);
                    }}
                  >
                    {cvalue.head}
                  </p>
                </a>
              ) : (
                <>
                  <p
                    onClick={() => {
                      settabtoggle(cvalue.id);
                    }}
                  >
                    {cvalue.head}
                  </p>
                </>
              )}
            </>
          ))}
        </div>
        <div className="tabscontent">
          {tabtoggle === 0 ? (
            tabContent(
              "We need you work safely",
              "Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            )
          ) : tabtoggle === 1 ? (
            tabContent(
              "We need you work safely 2",
              "Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            )
          ) : tabtoggle === 2 ? (
            tabContent(
              "We need you work safely 3",
              "Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            )
          ) : tabtoggle === 3 ? (
            tabContent(
              "We need you work safely 4",
              "Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            )
          ) : tabtoggle === 4 ? (
            tabContent(
              "We need you work safely 5",
              "Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            )
          ) : tabtoggle === 5 ? (
            tabContent(
              "We need you work safely 5",
              "Lorem Ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

function tabContent(head, desc) {
  return (
    <div className="banenrcontent">
      <span>{head}</span>
      <p>{desc}</p>
      <div className="buttons_container">
        <button className="btn_login_tabs">Find Talent</button>
        <button className="btn_signup_tabs">
          Find Work <BsChevronDoubleRight className="signupbtn_icon" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
