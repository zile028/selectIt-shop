import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setVisibleLoader} from '../../store/loaderSlice';
import ProductService from "../../services/productService";
import Heading from '../../component/Heading/Heading';
import bgImage from "../../assets/images/shopbanner.jpg"
import ProductCard from '../../component/ProductCard/ProductCard';
import Sidebar from '../../component/SIdebar/Sidebar';
import Loader from '../../component/Loader/Loader';
import Pagination from '../../component/Pagination/Pagination';

function ShopPage() {
    const [products, setProducts] = useState([])
    const [count, setCount] = useState()
    const [searchParams, setSearchParams] = useSearchParams()
    const {category} = useParams()
    const dispatch = useDispatch()
    let limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")) : 9
    let page = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1

    useEffect(() => {
        let req = null
        setSearchParams({limit, page})
        dispatch(setVisibleLoader(true))
        if (category) {
            req = ProductService.categoryPagination(limit, page, category)
        } else {
            req = ProductService.pagination(limit, page)
        }
        req.then((res) => {
            setProducts(res.data.products)
            setCount(res.data.count)
        })
            .catch((err) => {
            })
            .finally(() => dispatch(setVisibleLoader(false)))
    }, [searchParams]);


    const renderedProducts = () => {
        return products.map(product => {
            return <ProductCard product={product} key={product._id}/>
        })
    }


    return (
        <>
            <Heading title="OUR PRODUCTS" bgImage={bgImage}></Heading>
            <section className="container products_content">
                <Sidebar/>
                <div className='shop__wrapper'>
                    <Loader/>
                    <div className="products__container">
                        {renderedProducts()}
                    </div>
                    <Pagination setSearchParams={setSearchParams} limit={limit} page={page} count={count} />
                </div>
            </section>
        </>
    );
}

export default ShopPage;