import React from 'react'
import "./Components.css";
import logo from "../Assets/img/logo.png"
import Navbar from './Navbar';
import {AiOutlineSearch,AiOutlineUser} from "react-icons/ai"
import {BsChevronDoubleRight} from "react-icons/bs"
import { useState } from 'react';
import {Link} from "react-router-dom";
function Header() {
    const [searchtoggle, setsearchtoggle] = useState(false)
  return (
    <div className='Header'>
        <div className='logo_container'>
            <img src={logo} />
        </div>
        <div className="navbar_container">
            <Navbar/>
        </div>
        <div className="searchinput_container">
            <AiOutlineSearch color="white" size={20} className="desktopsearch_icon"/>
            <input type="text" placeholder='Search Here'/>
            <AiOutlineSearch color="white" size={20} className="mobilesearch_icon" onClick={()=>{setsearchtoggle(true)}}/>
        </div>
        <div className="buttons_container">
            <button className="btn_login">Login</button>
            <Link to="/signup"><button className="btn_signup">Signup <BsChevronDoubleRight className='signupbtn_icon' /></button></Link>
            <AiOutlineUser className='mobile_loginbtn' size={20}/>
        </div>
    </div>
  )
}

export default Header