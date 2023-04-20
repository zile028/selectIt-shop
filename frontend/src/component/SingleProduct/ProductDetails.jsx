import { useState } from "react";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };

  const renderedImages = () => {
    return product.images?.map((image, index) => {
      return (
        <img
          src={image}
          key={index}
          alt="Product various images"
          className="single-product__image"
        />
      );
    });
  };

  return (
    <div className="single-product__details">
      <div className="single-product__content-left">
        <div className="single-product__img-holder">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="single-product__img"
          />
        </div>
        <div className="single-product__images">{renderedImages()}</div>
      </div>
      <div className="single-product__content-right">
        <h2 className="single-product__title">{product.title}</h2>

        <div className="single-product__reviews">
          <p>Reviews</p>
          <a>Add Your Review</a>
        </div>

        <h3 className="single-product__price">${product.price}</h3>

        <h4 className="single-product__stock">
          Availability:{" "}
          <span>{product.stock > 0 ? "In stock" : "Not available"}</span>
        </h4>

        <p className="single-product__desc">{product.description}</p>
        <div className="single-product__controls">
          <div className="single-product__quantity-control">
            <button
              onClick={decreaseQuantity}
              className="single-product__quantity"
            >
              -
            </button>
            <span className="single-product__quantity">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="single-product__quantity"
            >
              +
            </button>
          </div>
          <button type="button" className="button button--primary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
