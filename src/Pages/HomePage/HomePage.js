import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import Banner from './Components/Banner'
import Business from './Components/Business'
import Enterprise from './Components/Enterprise'
import Great from './Components/Great'
import LeadingBrands from './Components/LeadingBrands'
import Logos from './Components/Logos'
import Slider from './Components/Slider'
import Talent from './Components/Talent'
import Team from './Components/Team'
import "./HomePage.css"
function HomePage() {
  return (
    <div className='HomePage'>
        <Banner/>
        <Logos/>
        <Talent/>
        <Enterprise/>
        <Business/>
        <Great/>
        <LeadingBrands/>
        <Team/>
        <Slider/>
        <Footer/>
    </div>
  )
}

export default HomePage