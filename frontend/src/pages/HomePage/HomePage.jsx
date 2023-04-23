import React from "react";
import Heading from "../../component/Heading/Heading";
import bgImage from "../../assets/images/contactbanner.jpg";
import Subscribe from "../../component/Subscribe/Subscribe";
import Testimonial from "../../component/Testimonial/Testimonial";
import CookieModal from "../../component/CookieModal/CookieModal";

function HomePage() {
  return (
    <>
      <CookieModal />
      <Heading title="Home page" bgImage={bgImage} />
      <div>HOME</div>
      <Subscribe />
      <Testimonial />
    </>
  );
}

export default HomePage;
