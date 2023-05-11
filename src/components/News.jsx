import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
    ]
  };

  return (
      <Slider {...settings} className="w-[60vw] mx-auto md:mb-40 mt-10">
        <div className="p-2 outline-none"> 
          <img
            className="rounded-3xl w-420 border-4 border-amber-400 transition-all duration-300 md:hover:scale-105"
            src="https://cdn.inappstory.com/story/fea/pme/u6c/kvrixq4qway7gumwfonpkit/custom_cover/logo-350x440.jpg?v=1683032510"
            alt=""
          />
        </div>
        <div className="p-2 outline-none">
          <img
            className="rounded-3xl w-420 border-4 border-amber-400 transition-all duration-300 md:hover:scale-105"
            src="https://cdn.inappstory.com/story/fea/pme/u6c/kvrixq4qway7gumwfonpkit/custom_cover/logo-350x440.jpg?v=1683032510"
            alt=""
          />
        </div>
        <div className="p-2 outline-none"> 
          <img
            className="rounded-3xl w-420 border-4 border-amber-400 transition-all duration-300 md:hover:scale-105"
            src="https://cdn.inappstory.com/story/fea/pme/u6c/kvrixq4qway7gumwfonpkit/custom_cover/logo-350x440.jpg?v=1683032510"
            alt=""
          />
        </div>
        <div className="p-2 outline-none">
          <img
            className="rounded-3xl w-420 border-4 border-amber-400 transition-all duration-300 md:hover:scale-105"
            src="https://cdn.inappstory.com/story/fea/pme/u6c/kvrixq4qway7gumwfonpkit/custom_cover/logo-350x440.jpg?v=1683032510"
            alt=""
          />
        </div>
        <div className="p-2 outline-none">
          <img
            className="rounded-3xl w-420 border-4 border-amber-400 transition-all duration-300 md:hover:scale-105"
            src="https://cdn.inappstory.com/story/fea/pme/u6c/kvrixq4qway7gumwfonpkit/custom_cover/logo-350x440.jpg?v=1683032510"
            alt=""
          />
        </div>
        <div className="p-2 outline-none">
          <img
            className="rounded-3xl w-420 border-4 border-amber-400 transition-all duration-300 md:hover:scale-105"
            src="https://cdn.inappstory.com/story/fea/pme/u6c/kvrixq4qway7gumwfonpkit/custom_cover/logo-350x440.jpg?v=1683032510"
            alt=""
          />
        </div>
      </Slider>

      
  );
}