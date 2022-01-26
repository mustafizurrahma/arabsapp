import React, { Component } from "react";
import Slider from "react-slick";
import { Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";


export default class RelatedSlider extends Component {
  componentWillUnmount() {
    AOS.init();
  }
  render() {
    var settings = {
      draggable: true,
      swipe: true,
      touchMove: true,
      centerMode: true,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      loop: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: false,
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className="productstore relatedSlider" data-aos="zoom-in" data-aos-delay="8000">
        <Slider {...settings}>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/pictures/SlideImage/1.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/pictures/SlideImage/2.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/pictures/SlideImage/3.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/pictures/SlideImage/4.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/pictures/SlideImage/5.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/pictures/SlideImage/6.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/pictures/SlideImage/7.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/pictures/SlideImage/8.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/pictures/SlideImage/9.png" />
            </div>
          </div>
          <div>
            <div className="product-one">
              <Image className="pimg" src="/assets/pictures/SlideImage/10.png" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
