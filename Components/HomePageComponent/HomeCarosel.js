import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
 import NavLink from "next/link";
 import { Pagination } from 'swiper/modules';
 import 'swiper/css';
 import 'swiper/css/pagination';
 import img_1 from '../../public/bannerImg/banner_img_1.png'
 import img_2 from '../../public/bannerImg/banner_img_2.jpg'
 import img_3 from '../../public/bannerImg/banner_img_3.jpg'
 import img_4 from '../../public/bannerImg/banner_img_4.png'
 

import homeST from "./homeStyle.module.css";
import Image from 'next/image';
function HomeCarosel() {
  const bannerImgs=[
    {
      img:img_1,
      _id:'1'
    },
    {
      img:img_2,
      _id:'2'
    },
    {
      img:img_3,
      _id:'3'
    },
    {
      img:img_4,
      _id:'4'
    }
  ]
 
  return (
   
    <div className={homeST.carousel_body}>
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={homeST.mySwiper}
      >
        {
          bannerImgs.map((bannerImg)=>(<SwiperSlide key={bannerImg._id}><Image src={bannerImg.img} alt='' /></SwiperSlide>))
        }
        
      </Swiper>
    </div>
 
  )
}

export default HomeCarosel
//  <SwiperSlide>Slide 4</SwiperSlide>