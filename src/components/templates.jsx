import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Templates (props) { 
    let slider = null;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };
    
    const next = () => slider.slickNext();
        
    const  previous = () => slider.slickPrev();
        

    return (
        <div className="resume-templates">
            <h4>Available templates</h4>
            <Slider {...settings} ref={c => (slider = c)} className="slider_templates">
                <div className="template">
                    <img src="https://www.hloom.com/images/professional-associate-accouting-manager-resume-template.png" alt="an images" />
                </div>
                <div className="template">
                    <img src="https://resume-example.com/wp-content/uploads/2021/03/budapest-half.png.webp" alt="an images" />
                </div>
                <div className="template">
                    <img src="https://resumegenius.com/wp-content/uploads/New-Professional-Resume-Template-Sea-Green.png" alt="an images" />
                </div>
                <div className="template">
                    <img src="https://www.theladders.com/wp-content/uploads/znx9yd6didn5eqz5np5g-724x1024.png" alt="an images" />
                </div>
                <div className="template">
                    <img src="https://www.theladders.com/wp-content/uploads/znx9yd6didn5eqz5np5g-724x1024.png" alt="an images" />
                </div>
                <div className="template">
                    <img src="https://www.theladders.com/wp-content/uploads/znx9yd6didn5eqz5np5g-724x1024.png" alt="an images" />
                </div>
            </Slider>
            <div className="slider_buttons">
                <span className="fa fa-chevron-left" onClick={() => previous()}></span>
                <span className="fa fa-chevron-right" onClick={() => next()}></span>
            </div>
        </div>
    )
}