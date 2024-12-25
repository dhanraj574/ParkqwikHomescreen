import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

function Banner() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    centerPadding: "20px",
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
  return (
    <div className="slider-container">
      <Slider className="slider" {...settings}>
        <div className="banner-card">
          <div>
            <div>
              <p className="bannertext1" >Add money to wallet</p>
              <p className="bannertext2">Get 2% cashback</p>
            </div>
            <button>Add Money</button>
          </div>
          <div><img src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727755793/Frame_odsmid.png" alt="Add money icon"/></div>
        </div>
        <div className="banner-card1">
            <div>
              <div>
                <p className="bannertext1">Recharge Fastag</p>
                <p className="bannertext2" >Get exiting prizes</p>
              </div>
              <button>Recharge Now</button>
            </div>
            <img src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727787472/WhatsApp_Image_2024-10-01_at_09.26_tzet0x.png" alt="Recharge Fastag icon"/>
        </div >
        <div className="banner-card1">
             <div>
                <div>
                  <p className="bannertext1">Doorstep Car Wash</p>
                  <p className="bannertext2" >Get 20% off on your first car wash</p>
                </div>
                <button className="banner-btn">Book Now</button>
            </div>
            <img src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1727787472/WhatsApp_Image_2024-10-01_at_09.26_1_skxuml.png" alt="Doorstep Car Wash icon"/>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
