import React from 'react'
import { useState } from 'react'
import "./Components.css"
import {GiHamburgerMenu} from "react-icons/gi"
function Navbar() {
    const [navbartoggle, setnavbartoggle] = useState(false)
    const navbardata = [
        {
            name:"Find Talent",
        },
        {
            name:"Find Work",
        },
        {
            name:"Why Upwork",
        },
        {
            name:"Enterprise"
        }
    ]
  return (<>
  <div className='Navbar'>
    <div className='Navbar_desktop'>
        {navbardata.map(cvalue => <p>{cvalue.name}</p>)}
    </div>
    <GiHamburgerMenu className='navbar_hamburger'/>
    </div>
    {navbartoggle ? <div className='navbar_mobile'></div> :<></>}
    </>
  )
}

export default Navbar