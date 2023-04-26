import { useEffect, useState } from "react";
import ProductService from "../../services/productService";
import { useParams } from "react-router-dom";
import ProductDetails from "../../component/SingleProduct/ProductDetails";
import ProductInfo from "../../component/SingleProduct/ProductInfo";
import LatestProducts from "../../component/LatestProducts/LatestProducts";
import Heading from "../../component/Heading/Heading";
import bgImage from "../../assets/images/productbanner.jpg"

const SingleProductPage = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    ProductService.getProductDetails(id)
        .then((res) => {
          console.log(res.data)
          setProduct(res.data)
        })
        .catch((err) => {
          console.log(err)
        })

    ;
  }, [id]);

  return (
      <>
        <Heading title="PRODUCT DETAILS" bgImage={bgImage}/>
        <div className="container">
          <div className="single-product__data">
            <ProductDetails product={product}/>
            <ProductInfo product={product}/>
          </div>
          <LatestProducts/>
        </div>
      </>
  )

};

export default SingleProductPage;
