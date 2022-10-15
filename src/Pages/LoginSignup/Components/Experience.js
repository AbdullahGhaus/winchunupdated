import React, { useState } from "react";
import CompHead from "../../../Components/CompHead";
import SignupHeader from "../../../Components/SignupHeader";
import { Link } from "react-router-dom";
import "../LoginSignup.css";
import addexp from "../../../Assets/img/addexp.png";
import Modal from "react-bootstrap/Modal";
import user from "../../../Assets/img/opp_user.png";
import addworkexp_company from "../../../Assets/img/addworkexp_company.png";
import addworkexp_calendar from "../../../Assets/img/addworkexp_calendar.png";
import addworkexp_flag from "../../../Assets/img/addworkexp_flag.png";
import addworkexp_message from "../../../Assets/img/addworkexp_message.png";

function Experience() {
  const [modalShow, setModalShow] = useState(false);
  const [currentlyworking, setcurrentlyworking] = useState(false)

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
            add work experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="addworkexp_cont">
          <div className="addworkexp_input_cont">
            <label for="title">Title:</label>
            <div className="addworkexp_input_inner">
              <img src={user} />
              <input
                type={"text"}
                id="title"
                placeholder="EX: Software Engineer"
                required
              />
            </div>
          </div>
          <div className="addworkexp_input_cont">
            <label for="company">Company:</label>
            <div className="addworkexp_input_inner">
              <img src={addworkexp_company} />
              <input
                type={"text"}
                id="company"
                placeholder="EX: Bachelors"
                required
              />
            </div>
          </div>
          <div className="addworkexp_input_cont">
            <label for="country">Location:</label>
            <div className="addworkexp_input_cont_inner">
              <div className="addworkexp_input_inner">
                <img src={addworkexp_flag} />
                <select
                  aria-label="Default select example"
                  required
                  id="country"
                >
                  <option className="option">EX: Country</option>
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
                <img src={addworkexp_flag} />
                <select
                  aria-label="Default select example"
                  required
                  id="country"
                >
                  <option className="option">EX: United Kingdom</option>
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

            <div className="addworkexp_input_cont_checkbox">
              <label for="addworkexp_checkbox">
                I'm currently working here
              </label>
              <input type={"radio"} id="addworkexp_checkbox" onClick={()=>{setcurrentlyworking(true)}}/>
            </div>

            <div className="addworkexp_date">
            <div className="addworkexp_input_cont">
            <label for="date">Start Date:</label>
            <div className="addworkexp_input_cont_inner">
              <div className="addworkexp_input_inner">
                <img src={addworkexp_calendar} />
                <input
                type={"text"}
                id="date"
                placeholder="EX: Month"
                required
              />
              </div>
              <div className="addworkexp_input_inner">
                <img src={addworkexp_calendar} />
                <input
                type={"text"}
                id="title"
                placeholder="EX: Year"
                required
              />
              </div>
            </div>
            </div><div className="addworkexp_input_cont" >
            <label for="country">End Date:</label>
            <div className="addworkexp_input_cont_inner">
              <div className="addworkexp_input_inner">
                <img src={addworkexp_calendar} />
                <input
                type={"text"}
                id="date"
                placeholder="EX: Month"
                required
                disabled={currentlyworking}
              />
              </div>
              <div className="addworkexp_input_inner">
                <img src={addworkexp_calendar} />
                <input
                type={"text"}
                id="date"
                placeholder="EX: Year"
                required
                disabled={currentlyworking}
              />
              </div>
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
            Save Your Experience
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
          h1="if you have"
          span="relevant"
          h2="work"
          span2="experience"
          h3="add it here"
          desc="Freelancers who add their experience are twice as likely to win work. But if you're just starting out,
          you can still create a great profile. Just head on to the next page. "
        />
        <div className="Experience_inner">
          <button className="addexperiencebtn" onClick={() => setModalShow(true)}>
            Add Experience
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
          <Link to="/hiretalent2">
            <p>Back</p>
          </Link>
          <Link to="/education"> <button
            className="btn_image"
           
            style={{ fontWeight: "bold" }}
          >
            Next, Add Your Education
          </button></Link>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
