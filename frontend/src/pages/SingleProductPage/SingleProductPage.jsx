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
 console.log(product)
  const { id } = useParams();

  useEffect(() => {
    ProductService.getProductDetails(id).then((res) => setProduct(res.data));
  }, [id]);

  return (
    <>
      <Heading title="PRODUCT DETAILS" bgImage={bgImage} />
      <div className="container">
        <div className="single-product__data">
          <ProductDetails product={product} />
          <ProductInfo product={product} />
        </div>
        <LatestProducts />
      </div>
    </>
  )

};

export default SingleProductPage;
