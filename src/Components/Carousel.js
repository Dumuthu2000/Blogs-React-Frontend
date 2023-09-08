import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Set the interval between image changes (in milliseconds)
  };

  return (
    <div>
    <Slider {...settings}>
    <div className="slide">
      <img src="/images//travel.jpg" alt="Image 1" className="SlidingImages" />
      <h2 className="caption">Travel</h2>
    </div>
    <div className="slide">
      <img src="/images/technology.png" alt="Image 2" className="SlidingImages" />
      <h2 className="caption">Technology</h2>
    </div>
    <div className="slide">
      <img src="/images/coverPage.png" alt="Image 3" className="SlidingImages" />
      <h2 className="caption">Education</h2>
    </div>
    <div className="slide">
      <img src="/images/sports.jpg" alt="Image 3" className="SlidingImages" />
      <h2 className="caption">Sports</h2>
    </div>
    {/* Add more image slides as needed */}
  </Slider>
</div>
  );
};

export default Carousel;
