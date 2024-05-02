import React from 'react'
import '../../../Styles/slider.css';
import Slider from "react-slick";

import ava01 from "../../../Assets/images/ava-1.jpg";
import ava02 from "../../../Assets/images/ava-2.jpg";
import ava03 from "../../../Assets/images/ava-3.jpg";

const TestimonialSlider = () => {
  
  const settings = {
    dots: true,
    autoplay: true,
    inifinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlider: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  
  
  return (
    <Slider {...settings} >
      <div>
        <p className="review_text">
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptates, at vero eum vel facilis optio magni? Tempora eligendi, quas doloremque sit sunt facere accusantium ipsum blanditiis corrupti obcaecati?"
        </p>
        <div className="slider_content d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar" className=" rounded"/>
          <h6>Jhon Doe</h6>
        </div>
      </div>
        
      <div>
        <p className="review_text">
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptates, at vero eum vel facilis optio magni? Tempora eligendi, quas doloremque sit sunt facere accusantium ipsum blanditiis corrupti obcaecati?"
        </p>
        <div className="slider_content d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar" className=" rounded"/>
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
        
      <div>
        <p className="review_text">
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam voluptates, at vero eum vel facilis optio magni? Tempora eligendi, quas doloremque sit sunt facere accusantium ipsum blanditiis corrupti obcaecati?"
        </p>
        <div className=" slider_content d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar" className=" rounded"/>
          <h6>Steven Crock</h6>
        </div>
      </div>
      
    </Slider>
  )
}

export default TestimonialSlider