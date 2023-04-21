import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { reviewsOne } from "./clientsData";
import { reviewsTwo } from "./clientsData";
import { reviewsThree } from "./clientsData";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css"

import { Pagination } from "swiper";
import SingleReview from "./SingleReview";
 

export default function App() {
  return (
    <div >
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        
        style={{height:"60vh"}}
      >

 <SwiperSlide>

      {reviewsOne && reviewsOne.map((review ) => {
        return <SingleReview
         key={review.id}
         name={review.name}
         job={review.job}
         image={review.image}
         text={review.text}

        />
      })}

  </SwiperSlide>
      <SwiperSlide>
       {reviewsTwo &&  reviewsTwo.map((review ) => {
         return <SingleReview 
           key={review.id}
           name={review.nameTwo}
           job={review.jobTwo}
           image={review.imageTwo}
           text={review.textTwo}
         />
          })}
       </SwiperSlide>

       <SwiperSlide> 
         
         {reviewsThree && reviewsThree.map((review) =>{
          return <SingleReview 
             key={review.id}
             name={review.nameThree}
             job={review.jobThree}
             image={review.imageThree}
             text={review.textThree}
          />
         })}
       </SwiperSlide>

      
        
      </Swiper>
    </div>
  );
}