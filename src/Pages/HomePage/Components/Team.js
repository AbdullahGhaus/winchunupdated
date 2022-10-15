import React from 'react'
import CompHead from '../../../Components/CompHead'
import "../HomePage.css"
import teamimg from "../../../Assets/img/teamimg.png"
import facebook from "../../../Assets/img/facebook.png"
import instagram from "../../../Assets/img/instagram.png"
import linkedin from "../../../Assets/img/linkedin.png"
function Team() {
    const teamdata =[
        {
           img:"teamimg",
           name:"name goes here",
           desc:"Designation Goes Here",
           facebook:"",
           instagram:"",
           linkedin:""
        },
        {
            img:"teamimg",
            name:"name goes here",
            desc:"Designation Goes Here",
            facebook:"",
            instagram:"",
            linkedin:""
         },
         {
            img:"teamimg",
            name:"name goes here",
            desc:"Designation Goes Here",
            facebook:"",
            instagram:"",
            linkedin:""
         },
         {
            img:"teamimg",
            name:"name goes here",
            desc:"Designation Goes Here",
            facebook:"",
            instagram:"",
            linkedin:""
         }
    ]
  return (
    <div className='Team'>
        <CompHead h1="Meet our" span="team member"  desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."/>
        <div className='team_container'>
            {teamdata.map(cvalue => <div className='team_box'>
                <img src={require(`../../../Assets/img/${cvalue.img}.png`)} />
                <h3>{cvalue.name}</h3>
                <p>{cvalue.desc}</p>
                <div className='team_social'>
                    <img src={facebook} className="teamsocialicon" />
                    <img src={instagram} className="teamsocialicon" />
                    <img src={linkedin} className="teamsocialicon" />
                </div>
            </div>)}
        </div>

        <button className='btn_image'>Learn More</button>
    </div>
  )
}

export default Team