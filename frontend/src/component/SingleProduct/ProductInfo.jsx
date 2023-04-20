import React, { useState } from "react";

const ProductInfo = ({ product }) => {
  const [selectedSection, setSelectedSection] = useState("product");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <section className="single-product__descriptions">
      <div className="single-product__info">
        <button
          style={{
            backgroundColor:
              selectedSection === "product" ? "#1DAAA3" : "white",
            color: selectedSection === "product" ? "white" : "black",
          }}
          className="button button--primary single-product__selection"
          onClick={() => handleSectionClick("product")}
        >
          PRODUCT DESCRIPTION
        </button>
        <button
          style={{
            backgroundColor: selectedSection === "more" ? "#1DAAA3" : "white",
            color: selectedSection === "more" ? "white" : "black",
          }}
          className="button button--primary single-product__selection"
          onClick={() => handleSectionClick("more")}
        >
          MORE INFORMATION
        </button>
        <button
          style={{
            backgroundColor:
              selectedSection === "reviews" ? "#1DAAA3" : "white",
            color: selectedSection === "reviews" ? "white" : "black",
          }}
          className="button button--primary single-product__selection"
          onClick={() => handleSectionClick("reviews")}
        >
          REVIEWS
        </button>
      </div>


      {selectedSection === "product" && (
        <div className="product-information">
          <p>
            Our chairs are designed with both style and comfort in mind. We use
            only the finest materials, so you can rest assured that your new
            chair will be both durable and long-lasting. From soft, luxurious
            fabrics to sturdy, high-quality wood, our chairs are built to
            withstand years of use. But we don't just care about durability - we
            also care about style. That's why we offer a wide range of chairs in
            different colors, shapes, and styles to suit any taste. Whether you
            prefer a classic, timeless look or something more modern and trendy,
            we've got the perfect chair for you.
          </p>
        </div>
      )}
      {selectedSection === "more" && (
        <div className="more-information">
          <p>
            And don't forget about the details! Our chairs come with a variety
            of features to make your life easier. From built-in cup holders to
            adjustable armrests, we've thought of everything to make your chair
            as comfortable and functional as possible. So what are you waiting
            for? Browse our selection of chairs today and find the perfect one
            for your home!
          </p>
        </div>
      )}
      {selectedSection === "reviews" && (
        <div className="reviews">
          <p>
            "The chairs at this shop are incredibly comfortable and stylish - I
            love how they complement my home decor."
          </p>
          <p>
            "I was impressed with the quality of the chairs at this shop - they
            are well-built and sturdy, and I know they'll last for years to
            come."
          </p>
          <p>
            "The staff at this chair shop were incredibly helpful and
            knowledgeable, answering all my questions and helping me find the
            perfect chairs for my space."
          </p>
        </div>
      )}
    </section>
  );
};

export default ProductInfo;
