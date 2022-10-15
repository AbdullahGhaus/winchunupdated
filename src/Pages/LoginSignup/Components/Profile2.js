import React, { useState } from "react";
import CompHead from "../../../Components/CompHead";
import SignupHeader from "../../../Components/SignupHeader";
import { Link } from "react-router-dom";
import img1 from "../../../Assets/img/addworkexp_company.png";
import userimage from "../../../Assets/img/user_dummy.png";
import city from "../../../Assets/img/city.png";
import lock from "../../../Assets/img/lock.png";
import address from "../../../Assets/img/address.png";
import earth from "../../../Assets/img/earth.png";
import phone from "../../../Assets/img/Phone.png";
import "../LoginSignup.css";
function Profile1() {
  const [skillselected, setskillselected] = useState([]);
  const [selectedfile, setselectedfile] = useState(null);
  console.log(selectedfile);
  const onFileChange = (event) => {
    setselectedfile(event.target.files[0]);
  };
  return (
    <div className="Signup">
      <SignupHeader />
      <div className="Signup_cont">
        <CompHead
          h1="A few"
          span="Last details"
          desc="To keep things safe and simple, thats why we need your personal information"
        />
        <div className="Profile_inner">
          <div className="profile_inner_left">
            <img src={userimage} />
            <label for="userImage" class="btn">
              + Uplaod Image
            </label>
            <input id="userImage" type="file"></input>
          </div>



          <div className="profile_inner_right">
            <div className="profile_inner_right_left">
              <div className="addworkexp_input_inner">
                <img src={earth} />
                <input
                  type={"text"}
                  id="Country"
                  placeholder="Country"
                  required
                />
              </div>

              <div className="addworkexp_input_inner">
                <img src={address} />
                <input
                  type={"text"}
                  id="Street"
                  placeholder="Street Address"
                  required
                />
              </div>

              <div className="addworkexp_input_inner">
                <img src={city} />
                <input
                  type={"text"}
                  id="City"
                  placeholder="City"
                  required
                />
              </div>
            </div>
            <div className="profile_inner_right_right">


            <div className="addworkexp_input_inner">
                <img src={phone} />
                <input
                  type={"text"}
                  id="Country"
                  placeholder="Phoen Number"
                  required
                />
              </div>

              <div className="addworkexp_input_inner">
                <img src={img1} />
                <input
                  type={"text"}
                  id="Street"
                  placeholder="Apt/suit"
                  required
                />
              </div>

              <div className="addworkexp_input_inner">
                <img src={lock} />
                <input
                  type={"text"}
                  id="City"
                  placeholder="Zip/Postal Code"
                  required
                />
              </div>


            </div>
          </div>
        </div>
        <p>We’ll Send You a text with a code to enter </p>
        <Link to="/hourlyrates">
          <button className="btn_image" style={{ fontWeight: "bold"}}>
            Next, Add Your Experience
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Profile1;
