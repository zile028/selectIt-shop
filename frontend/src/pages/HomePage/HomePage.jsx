import React from "react";
import Subscribe from "../../component/Subscribe/Subscribe";
import Testimonial from "../../component/Testimonial/Testimonial";
import CookieModal from "../../component/CookieModal/CookieModal";
import SliderTop from "../../component/SliderTop/SliderTop";

function HomePage() {
	return (
	  <>
		  <CookieModal/>
		  <SliderTop/>
		  <Subscribe/>
		  <Testimonial/>
	  </>
	);
}

export default HomePage;