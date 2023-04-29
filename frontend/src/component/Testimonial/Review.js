import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import reviews from "./clientsData";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";
import SingleReview from "./SingleReview";


export default function App() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
 
  const handleButtonClick = (index) => {
    if (swiper) {
      swiper.slideTo(index * 3);
      setActiveIndex(index);
  
    }
  };
  return (
    <div >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // pagination={{ clickable: true, dynamicBullets: true }}
        // modules={[Pagination]}
        onSwiper={setSwiper}
        mousewheel={false}
        allowTouchMove={false}
         className="swipes"
      >
        {reviews.map((review) => {
          return (
            <SwiperSlide key={review.id}>
              <SingleReview
                name={review.name}
                job={review.job}
                image={review.image}
                text={review.text}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="buttons">
        {[0, 1, 2].map((index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              className="button-slider"
              onClick={() => handleButtonClick(index)}
            >
          
             <div className={`circle ${isActive ? "colored" : ""}`} ></div>
      
            </button>
          );
        })}
      </div>
     
    </div>
  );
}
