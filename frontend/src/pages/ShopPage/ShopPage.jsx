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

    const handlePreviousPage = () => {
        if (page > 1) {
            setSearchParams({limit, page: page - 1})
        }
    }

    const handleNextPage = () => {
        if (page < Math.ceil(count / limit)) {
            setSearchParams({limit, page: page + 1})
        }
    }

    const renderPageBtn = () => {
        let numberPage = Math.ceil(count / limit)

        return Array(numberPage).fill(1).map((el, index) => {
            return <li key={index} className="page-item">
                <button className="page-link" name={el + index} onClick={changePage}>{el + index}</button>
            </li>

        })
    }

    const changePage = (e) => {
        setSearchParams({limit, page: e.target.name})
    }

    return (
        <>
            <Heading title="OUR PRODUCTS" bgImage={bgImage}></Heading>


            <section className="container products_content">

                <Sidebar/>
                <div>
                    <Loader/>
                    <div className="products__container">
                        {renderedProducts()}
                    </div>

                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <button className="page-link" aria-label="Previous" onClick={handlePreviousPage}>
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>
                            {count && renderPageBtn()}
                            <li className="page-item">
                                <button className="page-link" aria-label="Next" onClick={handleNextPage}>
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    );
}

export default ShopPage;