import React, { useState } from "react";
import CompHead from "../../../Components/CompHead";
import SignupHeader from "../../../Components/SignupHeader";
import { Link } from "react-router-dom";
import "../LoginSignup.css";
import addexp from "../../../Assets/img/addexp.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import user from "../../../Assets/img/opp_user.png";
import eduschool from "../../../Assets/img/eduschool.png";
import edudegree from "../../../Assets/img/edudegree.png";
import edubusi from "../../../Assets/img/edubusi.png";
import addworkexp_calendar from "../../../Assets/img/addworkexp_calendar.png";
import addworkexp_message from "../../../Assets/img/addworkexp_message.png";


import Form from "react-bootstrap/Form";

function Education() {
  const [modalShow, setModalShow] = useState(false);
  const [currentlyworking, setcurrentlyworking] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="addworkexpmodal_cont"
      >
        <Modal.Header className="addworkexp_head">
          <Modal.Title id="contained-modal-title-vcenter">
            add education history
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="addworkexp_cont">
          <div className="addworkexp_input_cont">
            <label for="School">School</label>
            <div className="addworkexp_input_inner">
              <img src={eduschool} />
              <input
                type={"text"}
                id="School"
                placeholder="EX: Boston University"
                required
              />
            </div>
          </div>
          <div className="addworkexp_input_cont">
            <label for="Degree">Degree</label>
            <div className="addworkexp_input_inner">
              <img src={edudegree} />
              <input
                type={"text"}
                id="Degree"
                placeholder="EX: Bachelors"
                required
              />
            </div>
          </div>
          <div className="addworkexp_input_cont">
            <label for="fieldofstudy">Field Of Study</label>
            <div className="addworkexp_input_inner">
              <img src={edubusi} />
              <input
                type={"text"}
                id="fieldofstudy"
                placeholder="EX: Business"
                required
              />
            </div>
          </div>
          <div className="addworkexp_input_cont">
            <label for="datesedu">Dates Attended:</label>
            <div className="addworkexp_input_cont_inner">
              <div className="addworkexp_input_inner">
                <img src={addworkexp_calendar} />
                <select
                  aria-label="Default select example"
                  required
                  id="datesedu"
                >
                  <option className="option">From</option>
                  <option value="1">a</option>
                  <option value="2">b</option>
                  <option value="3">c</option>
                  <option value="4">d</option>
                  <option value="5">e</option>
                  <option value="6">f</option>
                  <option value="7">g</option>
                </select>
              </div>
              <div className="addworkexp_input_inner">
                <img src={addworkexp_calendar} />
                <select
                  aria-label="Default select example"
                  required
                  id="datesedu"
                >
                  <option className="option">To (or Expected Graduation Year)</option>
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
          </div>

         
          <div className="addworkexp_input_cont">
            <label for="desc">Description :</label>
            <div className="addworkexp_input_inner">
              <img src={addworkexp_message} />
              <textarea
                type={"text"}
                id="desc"
                placeholder="EX: Brief description about yourself"
                required
                rows={4}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="addworkexpmodal_footer">
          <button onClick={props.onHide} className="btn_image">
            Save Your Information
          </button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className="Signup">
      <SignupHeader />
      <div className="Signup_cont">
        <CompHead
          h1="Clients Like to Know waht you know - "
          span="Add your education here"
          desc="Freelancers who add their experience are twice as likely to win work. But if you're just starting out,
          you can still create a great profile. Just head on to the next page. "
        />
        <div className="Experience_inner">
          <button
            className="addexperiencebtn"
            onClick={() => setModalShow(true)}
          >
            Add Education
            <img src={addexp} />
          </button>

          <div className="files_checkbox_cont">
            <label for="files_checkbox">
              Nothing to add? Check the box and keep going
            </label>
            <input type={"checkbox"} id="files_checkbox" />
          </div>
        </div>

        <div className="exp_third_div">
          <Link to="/liketowork">
            <p>Back</p>
          </Link>
          <Link to="/service1">
            {" "}
            <button className="btn_image" style={{ fontWeight: "bold" }}>
              Next
            </button>
          </Link>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
