import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import ProductService from "../../services/productService";

function ShopPage() {
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        let limit = searchParams.get("limit") ? searchParams.get("limit") : 10
        let page = searchParams.get("page") ? searchParams.get("page") : 1
        setSearchParams({limit, page})

        ProductService.pagination(limit, page)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
            })
    }, [searchParams]);


    return (
        <section className="container">
            <div>ShopPage</div>

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <button className="page-link" aria-label="Next" onClick={() => {
                            setSearchParams({limit: 10, page: 5})
                        }}>
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default ShopPage;