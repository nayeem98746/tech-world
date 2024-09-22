import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
 import NavLink from "next/link";
 import { Pagination } from 'swiper/modules';
 import 'swiper/css';
 import 'swiper/css/pagination';
 

import homeST from "./homeStyle.module.css";
function HomeCarosel() {

    
 
  return (
   
    < >
    <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Sliddddddddddddddddde 1</SwiperSlide>
        <SwiperSlide>Slidddddddddddddddde 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        
      </Swiper>
    </ >
 
  )
}

export default HomeCarosel