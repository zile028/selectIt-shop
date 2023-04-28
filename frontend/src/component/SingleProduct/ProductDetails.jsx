import {useState} from "react";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/cartSlice";

const ProductDetails = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(0);
    const dispatch = useDispatch()

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity !== 0) {
            setQuantity(quantity - 1);
        }
    };

    const renderMainImage = (index) => {
        setMainImage(index)
    }

    const renderedImages = () => {
        return product.images?.map((image, index) => {
            return (
                <button type="button" key={index} onClick={() => renderMainImage(index)}>
                    <img
                        src={image}
                        alt="Product various images"
                        className={`single-product__image ${mainImage === index ? 'single-product__image--active' : null}`}
                    />
                </button>
            );
        });
    };

    //ADD TO CART
    const addToCartHandler = () => {
        dispatch(addToCart({product, quantity}))
    }

    return (
        <div className="single-product__details">
            <div className="single-product__content-left">
                {
                    product.images?.length !== 0 ? 
                    <>
                        <div className="single-product__img-holder">
                            {product.images && <img
                                src={product.images[mainImage]}
                                alt={product.title}
                                className="single-product__img"
                            />}
                        </div>
                        <div className="single-product__images">
                            {renderedImages()}
                        </div>
                    </>
                    :
                    <>
                        <img src={product.thumbnail} alt={product.title} />
                    </>
                }
                

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

                    <button type="button" className="button button--primary" onClick={addToCartHandler}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
