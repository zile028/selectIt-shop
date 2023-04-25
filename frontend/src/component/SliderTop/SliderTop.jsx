import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "./_sliderTop.scss";
import SliderService from "../../services/SliderService";
const SliderTop = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    SliderService.getSliderData().then((res) => {
      setSlides(res.data);
    });
  }, []);

  return (
    <Swiper
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
              backgroundImage: `url(${slide.imageUrl})`,
            }}
          >
            <div className="text">
              <h1>{slide.header}</h1>
              <p>{slide.text}</p>
              <button className="btn btn-primary">{slide.buttonText}</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderTop;
