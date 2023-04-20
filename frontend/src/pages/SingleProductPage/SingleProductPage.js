import { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsCartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import ProductService from "../../services/productService";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [selectedSection, setSelectedSection] = useState("product");

  const { id } = useParams();

  useEffect(() => {
    ProductService.getProductDetails(id).then((res) => setProduct(res.data));
  }, [id]);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <main>
        <div className="image-wrapper">
          <img src="" alt="product"></img>
        </div>

        <div className="price-section">
          <h1 className="price-title">MODERN CHAIRS</h1>
          <p className="review">
            <AiFillStar style={{ color: "orange" }} />
            <AiFillStar style={{ color: "orange" }} />
            <AiFillStar style={{ color: "orange" }} />
            <AiFillStar />
            <AiFillStar />
            <span style={{ fontWeight: "bold" }}>Reviews</span>{" "}
            <span style={{ fontWeight: "lighter" }}>Add Your Review</span>
          </p>

          <span className="price">35.00$</span>

          <p>
            Availability: <span style={{ color: "#1DAAA3" }}>in Stock</span>
          </p>
          <p>
            Color: <span style={{ color: "#1DAAA3" }}>Black and red</span>
          </p>

          <p>
            Looking for the perfect chair to complete your living space? Look no
            further! Our selection of chairs has something for everyone. Whether
            you're looking for a plush and comfortable armchair to curl up in
            with a good book, or a sleek and modern dining chair to impress your
            guests, we've got you covered
          </p>

          <div>
            <button onClick={decreaseQuantity} className="items-number-minus">
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button onClick={increaseQuantity} className="items-number-plus">
              +
            </button>
          </div>

          <div className="bottom-section">
            <button className="add-to-cart">
              <BsCartFill style={{ marginRight: "10px" }} />
              Add to cart
            </button>
            <div className="heart">
              <BsHeart />
            </div>
          </div>
        </div>
      </main>

      <section>
        <div className="section-header">
          <div
            style={{
              backgroundColor:
                selectedSection === "product" ? "#1DAAA3" : "white",
              color: selectedSection === "product" ? "white" : "black",
            }}
            className="section-box"
            onClick={() => handleSectionClick("product")}
          >
            PRODUCT DESCRIPTION
          </div>
          <div
            style={{
              backgroundColor: selectedSection === "more" ? "#1DAAA3" : "white",
              color: selectedSection === "more" ? "white" : "black",
            }}
            className="section-box"
            onClick={() => handleSectionClick("more")}
          >
            MORE INFORMATION
          </div>
          <div
            style={{
              backgroundColor:
                selectedSection === "reviews" ? "#1DAAA3" : "white",
              color: selectedSection === "reviews" ? "white" : "black",
            }}
            className="section-box"
            onClick={() => handleSectionClick("reviews")}
          >
            REVIEWS
          </div>
        </div>
        <hr></hr>

        {selectedSection === "product" && (
          <div className="product-information">
            <p>
              Our chairs are designed with both style and comfort in mind. We
              use only the finest materials, so you can rest assured that your
              new chair will be both durable and long-lasting. From soft,
              luxurious fabrics to sturdy, high-quality wood, our chairs are
              built to withstand years of use. But we don't just care about
              durability - we also care about style. That's why we offer a wide
              range of chairs in different colors, shapes, and styles to suit
              any taste. Whether you prefer a classic, timeless look or
              something more modern and trendy, we've got the perfect chair for
              you.
            </p>
          </div>
        )}
        {selectedSection === "more" && (
          <div className="more-information">
            <p>
              And don't forget about the details! Our chairs come with a variety
              of features to make your life easier. From built-in cup holders to
              adjustable armrests, we've thought of everything to make your
              chair as comfortable and functional as possible. So what are you
              waiting for? Browse our selection of chairs today and find the
              perfect one for your home!
            </p>
          </div>
        )}
        {selectedSection === "reviews" && (
          <div className="reviews">
            <p>
              "The chairs at this shop are incredibly comfortable and stylish -
              I love how they complement my home decor."
            </p>
            <p>
              "I was impressed with the quality of the chairs at this shop -
              they are well-built and sturdy, and I know they'll last for years
              to come."
            </p>
            <p>
              "The staff at this chair shop were incredibly helpful and
              knowledgeable, answering all my questions and helping me find the
              perfect chairs for my space."
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default SingleProductPage;
