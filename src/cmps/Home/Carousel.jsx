import React from 'react'
import Slider from 'react-slick'

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <i
      className={'fa-solid fa-chevron-left hover:text-gray-500'}
      style={{display: "block", color: "black" , position: "absolute", top: "50%", left: '20px', zIndex: 1, cursor:'pointer'}}
      onClick={onClick}
      hidden={false}
    ></i>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <i
      className={'fa-solid fa-chevron-right'}
      style={{display: "block", color: "black" , position: "absolute", top: "50%", right: '20px', zIndex: 1, cursor:'pointer'}}
      onClick={onClick}
      hidden={false}
    ></i>
  );
}

export function Carousel({gridClasses}) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    dots: false
  }
  return (
    <div className={`mx-auto slider-container w-[30em] h-[40em] rounded-lg mb-10 ${gridClasses}`}>
      <Slider {...settings}>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1676657954811-9409c4830467?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1433832597046-4f10e10ac764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"  />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1496871455396-14e56815f1f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D"  />
        </div>
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1676657954811-9409c4830467?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1496871455396-14e56815f1f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHx8MA%3D%3D" />
        </div>
      </Slider>
    </div>
  )
}
