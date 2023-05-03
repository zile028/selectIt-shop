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
import AxiosErrorPage from "../ErrorPage/AxiosErrorPage";
import Pagination from '../../component/Pagination/Pagination';

function ShopPage() {
    const [axiosError, setAxiosError] = useState(null);
    const [products, setProducts] = useState([])
    const [count, setCount] = useState()
    const [perPageView, setPerPageView] = useState([9, 6, 12]);
    const [selectedView, setSelectedView] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams()
    const {category} = useParams()

    const dispatch = useDispatch()

    const handlePerPageView = (index) => {
        setSelectedView(index)
    }

    const renderedPerPageView = () => {
        return perPageView.map((view, index) => {
            return <li key={index} className='shop__view-item'>
                    <button onClick={() => handlePerPageView(index)} className={selectedView === index ? `shop__view-btn--active` : `shop__view-btn`}>{view}</button>
                </li>
        })
    }

    let limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")) : perPageView[selectedView]
    let page = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1
    let search = searchParams.get("search") ? searchParams.get("search") : ""

    useEffect(() => {
        let req = null

        if (perPageView[selectedView] !== limit) {
            setSearchParams({limit: perPageView[selectedView], page})
        } else if (search !== "") {
            setSearchParams({search, limit, page})
        } else {
            setSearchParams({limit, page})
        }

        dispatch(setVisibleLoader(true))

        if (category) {
            req = ProductService.categoryPagination(limit, page, category)
        } else if (search) {
            req = ProductService.searchProduct(search, limit, page)
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
    }, [searchParams, selectedView]);


    const renderedProducts = () => {
        return products?.map(product => {
            return <ProductCard product={product} key={product._id}/>
        })
    }

    return (
        <>
            <Heading title="OUR PRODUCTS" bgImage={bgImage}></Heading>
            {axiosError ? (
                <AxiosErrorPage axiosError={axiosError} />
            ) : (
            <section className="container products_content">
                <Sidebar/>
                <div className='shop__wrapper'>
                    <Loader/>
                    <div className='shop__view'>
                        <span className='shop__view-title'>View per page: </span>
                        <ul className='shop__view-list'>
                            {renderedPerPageView()}
                        </ul>
                    </div>

                    <div className="products__container">
                        {products.length !== 0 ? renderedProducts() : <><h2>No results.</h2></>}
                    </div>
                    <Pagination setSearchParams={setSearchParams} limit={limit} page={page} count={count} />
                </div>
            </section>
      )}
        </>
    );
}

export default ShopPage;