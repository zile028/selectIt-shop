import React from "react";
import Subscribe from "../../component/Subscribe/Subscribe";
import Testimonial from "../../component/Testimonial/Testimonial";
import CookieModal from "../../component/CookieModal/CookieModal";
import SliderTop from "../../component/SliderTop/SliderTop";
import MasonryProducts from "../../component/MasonryProducts/MasonryProducts";

function HomePage() {
	return (
	  <>
		  <CookieModal/>
		  <SliderTop/>
		  <MasonryProducts />
		  <Subscribe/>
		  <Testimonial/>
	  </>
	);
}

export default HomePage;