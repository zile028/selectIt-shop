import React, { useState, useEffect } from "react";
import ProductService from "../../services/productService";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import UserServices from "../../services/UserServices";
import { setUser } from "../../store/userSlice";
import { routes } from "../../router/routes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FavoriteProductDetails = ({ productId, user }) => {
  const [product, setProduct] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    ProductService.getProductDetails(productId).then((res) =>
      setProduct(res.data)
    );
  }, []);
  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: 1 }));
    toast.info(`${product.title} added to cart`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const handleRemoveFromFavorites = () => {
    UserServices.removeFromFavorite({
      productId: product._id,
      userId: user._id,
    })
      .then((result) => {
        dispatch(setUser(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="favorite-item">
        <span>
          <Link to={routes.PRODUCT_DETAIL.realPath(product?._id)}>
            <img src={product?.thumbnail} alt="" />
            {product?.title}
          </Link>
        </span>
        <div className="actions">
          <div className="add" onClick={handleAddToCart}>
            <AiOutlineShoppingCart />
          </div>
          <div className="delete" onClick={handleRemoveFromFavorites}>
            <AiOutlineDelete />
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteProductDetails;
