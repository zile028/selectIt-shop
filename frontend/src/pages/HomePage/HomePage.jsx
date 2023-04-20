import React from "react";
import Heading from "../../component/Heading/Heading";
import bgImage from "../../assets/images/contactbanner.jpg";
import Subscribe from "../../component/Subscribe/Subscribe";
import Footer from "../../component/Footer/Footer";

function HomePage() {
  return (
    <>
      <Heading title="Home page" bgImage={bgImage} />
      <div>HOME</div>
      <Subscribe />
      <Footer />
    </>
  );
}

export default HomePage;
