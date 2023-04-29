import React, { useEffect, useState } from 'react';
import ProductCard from '../../component/ProductCard/ProductCard';
import ProductService from '../../services/productService';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import bgImage from "../../assets/images/productbanner.jpg"
import Heading from '../../component/Heading/Heading';
import Loader from '../../component/Loader/Loader';
import LatestProductsCategories from '../../component/LatestProductsCategories/LatestProductsCategories';
import CategoryServices from '../../services/CategoryServices';
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";


SwiperCore.use([Pagination, Navigation]);

function LatestProductPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductService.pagination(28, 1); 
        
        const productsWithRandomDate = response.data.products.map((product) => {
          const randomTimestamp = Math.random() * (new Date().getTime() - new Date(2000, 0, 1).getTime()) + new Date(2000, 0, 1).getTime();
          const randomDate = new Date(randomTimestamp);
          return { ...product, randomDate };
        });
  
        const sortedProducts = productsWithRandomDate.sort((a, b) => b.randomDate - a.randomDate);
        const latestProducts = sortedProducts.slice(0, 27);
  
        setProducts(latestProducts);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
        try {
            const response = await CategoryServices.getAllCategory();
            setCategories(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    fetchCategories();
}, []);

  const renderedProducts = () => {
    return products.map((product) => {
      return (
        <SwiperSlide key={product._id}>
          <ProductCard product={product} />
        </SwiperSlide>
      );
    });
  };

  return (
    <div id="app" className="app-container">
   <Heading title="Latest Products" bgImage={bgImage} />
   <Loader/>
   <div className="categories__products">

   <LatestProductsCategories products={products} setProducts={setProducts}/>
    <Swiper className="swiper"
            slidesPerView={4}
            spaceBetween={10}
            navigation
            pagination={{ clickable: true }}
        >

     <div className="latest__products">
      <div className="products__container">
          {renderedProducts()}
      </div>
    </div>
        </Swiper>


   </div>
   

    </div>
  );
}

export default LatestProductPage;