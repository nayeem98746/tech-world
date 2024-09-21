import React from 'react'
import Slider from 'react-slick'
import NavLink from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import homeST from "./homeStyle.module.css";
function HomeCarosel() {

    
const caroselSettings = {
    infinite: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    

};
  return (
    <div>
    <div>
        slider
    </div>
</div>
  )
}

export default HomeCarosel