import React, { useEffect, useState } from "react";
import ProductService from "../../services/productService";
import MasonryProductCard from "./MasonryProductCard";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import bgImage from "../../assets/images/contactbanner.jpg";
import {useDispatch} from "react-redux";
import {setVisibleLoader} from '../../store/loaderSlice';
import Loader from "../Loader/Loader";

const MasonryProducts = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setVisibleLoader(true))
    ProductService.getRandomProducts(4)
      .then((res) => setRandomProducts(res.data))
      .catch((err) => console.log(err))
      .finally(() => dispatch(setVisibleLoader(false)))
  }, []);

  const renderedProductsLeft = () => {
    return randomProducts.map((product, index) => {
      if (index < 2) {
        return (
          <MasonryProductCard
            product={product}
            key={product._id}
            larger={true}
          />
        );
      } else return null;
    });
  };

  const renderedProductsRight = () => {
    return randomProducts.map((product, index) => {
      if (index >= 2) {
        return (
          <MasonryProductCard
            product={product}
            key={product._id}
            larger={false}
          />
        );
      } else return null;
    });
  };

  return (
    <div className="container">
      <div className="masonry">
        <Loader />
        <div className="masonry__left">{renderedProductsLeft()}</div>
        <div className="masonry__right">
          {renderedProductsRight()}
          <div className="masonry__inner">
            <Link
              to={routes.SHOP.path}
              className="masonry__link masonry__link--color"
            >
              <h4>50% discount</h4>
              <p>on every brand</p>
              <button className="">shop now</button>
            </Link>
            <Link
              to={routes.SHOP.path}
              className="masonry__link masonry__link--img"
              style={{ backgroundImage: "url(" + bgImage + ")" }}
            >
              <div className="masonry__link-bg"></div>
              <h4>Trendy lightings</h4>
              <button className="">shop now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasonryProducts;
