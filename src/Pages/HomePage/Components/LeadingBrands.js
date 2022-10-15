import React from 'react'
import CompHead from '../../../Components/CompHead';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "../HomePage.css";
import img1 from "../../../Assets/img/lb-ellipse-1.png"
import img2 from "../../../Assets/img/lb-ellipse-2.png"
function LeadingBrands() {
    const leadingbrandswiper = [
        {
            icon:"leadingbrandswiper=logo",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
            result:"",
            subhead1:"50% Faster",
            subdesc1:"launch of products",
            subhead2:"10,000",
            subdesc2:"projects completed"
        },
        {
            icon:"leadingbrandswiper=logo",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
            result:"",
            subhead1:"50% Faster",
            subdesc1:"launch of products",
            subhead2:"10,000",
            subdesc2:"projects completed"
        },
    ]

    const swiperarr = leadingbrandswiper.map(cvalue => <div className='leadingbrands_box'>
    <img src={require(`../../../Assets/img/${cvalue.icon}.png`)}/>
    <p>{cvalue.desc}</p>
    <h3>results: {cvalue.result}</h3>
    <div className='leadingbrandbox_inner'>
        <div className='lbboxinner_inner'>
            <h3>{cvalue.subhead1}</h3>
            <span>{cvalue.subdesc1}</span>
        </div>
        <div className='lbboxinner_inner'>
            <h3>{cvalue.subhead2}</h3>
            <span>{cvalue.subdesc2}</span>
        </div>
    </div>
    </div>)
  return (
    <div className='LeadingBrands'> 
    <CompHead h1="Truested By" span="leading brands" h2="& startups" desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s." />
    <img src={img1} className="lb_ellipse_1"/>
    <img src={img2} className="lb_ellipse_2"/>
    <div className='leadingbrands_swiper'>
    <Swiper
        slidesPerView={2}
        spaceBetween={0}
        slidesPerGroup={2}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>{swiperarr[0]}</SwiperSlide>
        <SwiperSlide>{swiperarr[1]}</SwiperSlide>
      </Swiper>
    </div>
    <div className='leadingbrands_swiper_mobile'>
    <Swiper
slidesPerView={1}
spaceBetween={30}
slidesPerGroup={1}
loop={true}
loopFillGroupWithBlank={true}
pagination={{
  clickable: true,
}}
navigation={false}
modules={[Pagination, Navigation]}
className="mySwiper"
      >
        <SwiperSlide>{swiperarr[0]}</SwiperSlide>
        <SwiperSlide>{swiperarr[1]}</SwiperSlide>
      </Swiper>
    </div>
    </div>
  )
}

export default LeadingBrands