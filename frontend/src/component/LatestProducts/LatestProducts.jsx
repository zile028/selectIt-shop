import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { setVisibleLoader } from '../../store/loaderSlice';
import ProductService from '../../services/productService';
import Loader from '../Loader/Loader';

const LatestProducts = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setVisibleLoader(true))
    ProductService.getRandomProducts(5)
      .then((res) => setRandomProducts(res.data))
      .catch((err) => console.log(err))
      .finally(() => dispatch(setVisibleLoader(false)))
  }, []);

  const renderedProducts = () => {
    return randomProducts?.map((product) => {
        return (
          <ProductCard
            product={product}
            key={product._id}
          />
        );
    });
  };

  return (
    <div className='products-latest'>
      <Loader />
      <h2 className='products-latest__title'>Latest Products</h2>
      <div className='products-latest__content'>
        {renderedProducts()}
      </div>
    </div>
  )
}

export default LatestProducts