import React from 'react'
import "../HomePage.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation,Autoplay } from "swiper";
import img from "../../../Assets/img/slider-ellipse-1.png";
function Slider() {
    const sliderdata = [
        {
            head1:"Company to company",
            head2:"",
            span1:"consultancy",
            span2:"",
            desc1:"consultancy",
            desc2:"consultancy",
            img1:"c1",
            img2:"c2",
        },
        {
            head1:"a very nerdy guy with",
            span1:"charts guiding a",
            head2:"person what to do",
            span2:"with his/her business",
            desc1:"Company consultancy",
            desc2:"client consultancy",
            img1:"compc",
            img2:"clientc",
        },
        {
            head:"From a",
            span1:"freelance",
            head2:"to a client, will be",
            span2:"charged per hour",
            desc1:"client meeting",
            desc2:"freelancer meeting",
            img1:"cm",
            img2:"fm",
        }
    ]

    const sliderarr = sliderdata.map(cvalue => <div className='slider_container'>
        <h1>{cvalue.head1} <span>{cvalue.span1}</span> {cvalue.head2} <span>{cvalue.span2}</span></h1>
        <div className='slider_inner'>
            <div className='sliderinnerleft'>
                <img src={require(`../../../Assets/img/${cvalue.img1}.png`)} />
                <h4>{cvalue.desc1}</h4>
            </div>
            <div className='sliderinnerleft'>
            <img src={require(`../../../Assets/img/${cvalue.img2}.png`)} />
                <h4>{cvalue.desc2}</h4>
            </div>
        </div>
    </div>)
  return (
    <div className='Slider'>
        <img src={img} className="slider_img1"/>
        <img src={img} className="slider_img2"/>
            <Swiper
        slidesPerView={1}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={false}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>{sliderarr[0]}</SwiperSlide>
        <SwiperSlide>{sliderarr[1]}</SwiperSlide>
        <SwiperSlide>{sliderarr[2]}</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider