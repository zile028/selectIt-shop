import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import ProductService from "../../services/productService";
import Heading from '../../component/Heading/Heading';
import bgImage from "../../assets/images/shopbanner.jpg"
import ProductCard from '../../component/ProductCard/ProductCard';

function ShopPage() {
    const [products, setProducts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        let limit = searchParams.get("limit") ? searchParams.get("limit") : 9
        let page = searchParams.get("page") ? searchParams.get("page") : 1
        setSearchParams({limit, page})

        ProductService.pagination(limit, page)
            .then((res) => {
                setProducts(res.data.products)
            })
            .catch((err) => {
            })
    }, [searchParams]);


    
    const renderedProducts = () => {
        return products.map(product => {
            return <ProductCard product={product} key={product._id} />
        })
    }

    return (
        <>
            <Heading title="OUR PRODUCTS" bgImage={bgImage}></Heading>
            <section className="container">

                <div className="products__container">
                    {renderedProducts()}
                </div>

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link">3</a>
                        </li>
                        <li className="page-item">
                            <button className="page-link" aria-label="Next" onClick={() => {
                                setSearchParams({limit: 9, page: 5})
                            }}>
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    );
}

export default ShopPage;