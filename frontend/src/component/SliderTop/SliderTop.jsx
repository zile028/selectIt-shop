import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "./_sliderTop.scss";
import SliderService from "../../services/SliderService";
import { Link } from "react-router-dom";
const SliderTop = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    SliderService.getSliderData().then((res) => {
      setSlides(res.data);
    });
  }, []);

  return (
    <Swiper className="sliderTop"
	style={{minHeight:"800px"}}

      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation, Pagination, EffectCreative, Autoplay]}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide._id}>
          <div
            className="mySlide"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(29,170,163,0.2) 35%, rgba(29,170,163,0.1) 100%),url(${slide.imageUrl})`,
            }}
          >
            <div className="left">
              <img src={slide.imageUrl} alt="" />
            </div>
            <div className="right">
              <h1>{slide.header}</h1>
              <p className="lead">{slide.text}</p>
              <Link className="button button--primary" to={slide.buttonLink}>
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderTop;
