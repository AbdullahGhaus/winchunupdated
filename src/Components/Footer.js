import React from 'react'
import "./Components.css"
import {AiOutlineDoubleRight} from "react-icons/ai"
import {BiMap,BiEnvelope,BiPhone} from "react-icons/bi"
function Footer() {
  const footerdata = [
    {
      head:"job categories",
      links:[
        {
          name:"Lorem Ipsum is empty",
          Icon:AiOutlineDoubleRight
        },
        {
          name:"Lorem Ipsum is empty",
          Icon:AiOutlineDoubleRight
        },
        {
          name:"Lorem Ipsum is empty",
          Icon:AiOutlineDoubleRight
        },
        {
          name:"Lorem Ipsum is empty",
          Icon:AiOutlineDoubleRight
        },
      ]
    },    
    {
      head:"for talent",
      links:[
        {
          name:"Hard to Find Work",
          Icon:AiOutlineDoubleRight
        },
        {
          name:"Direct Contracts",
          Icon:AiOutlineDoubleRight
        },
        {
          name:"Find Freelance Jobs Worldwide",
          Icon:AiOutlineDoubleRight
        },
        {
          name:"Find Freelance Jobs in the US",
          Icon:AiOutlineDoubleRight
        },
      ]
    },
    {
      head:"sitemap",
      links:[
        {
          name:"Privacy Policy",
          Icon:AiOutlineDoubleRight
        },
        {
          name:"Terms & Conditions",
          Icon:AiOutlineDoubleRight
        },
        {
          name:"FAQs",
          Icon:AiOutlineDoubleRight
        }
      ]
    },
    {
      head:"contact info",
      links:[
        {
          name:"lorem ipsum state USA",
          Icon:BiMap
        },
        {
          name:"support@company.com",
          Icon:BiEnvelope
        },
        {
          name:"(123)-456-789-0000",
          Icon:BiPhone
        }
      ]
    }
  ]
  return (
    <>
    <div className='Footer'>
      {
        footerdata.map(cvalue => <div className='footer_container'>
          <h2>{cvalue.head}</h2>
          <div className='footer_links'>
          {cvalue.links.map(Cvalue2 => <li><Cvalue2.Icon />{Cvalue2.name}</li>)}
          </div>
        </div>)
      }
    </div>
    <div className='Footer_bottom'>
      <p>&copy; Copyrights 2022. All Rights Reserved</p>
    </div>
    </>
  )
}

export default Footer