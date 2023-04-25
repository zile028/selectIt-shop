import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation, Pagination, Autoplay } from "swiper";

import "swiper/swiper-bundle.min.css";
import "./_sliderTop.scss";
const SliderTop = () => {
  const slides = [
    {
      header: "",
      text: "",
      button: {
        btnText: "Home",
        btnLink: "/",
      },
      imgUrl:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      header: "",
      text: "",
      button: {
        btnText: "Home",
        btnLink: "/",
      },
      imgUrl:
        "https://images.pexels.com/photos/5625007/pexels-photo-5625007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      header: "",
      text: "",
      button: {
        btnText: "Home",
        btnLink: "/",
      },
      imgUrl:
        "https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

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
        <SwiperSlide key={slide.imgUrl}>
          <div
            className="mySlide"
            style={{
              backgroundImage: `url(${slide.imgUrl})`,
            }}
          >
            <h1>Lorem ipsum dolor sit.</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              quod labore distinctio repudiandae quaerat iure ipsum dolorem ex
              cupiditate itaque!
            </p>
            <button className="btn btn-warning btn-warning "> Click me</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderTop;
