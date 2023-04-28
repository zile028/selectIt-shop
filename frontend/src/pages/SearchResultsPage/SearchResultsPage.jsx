import React, {useEffect, useState} from "react";
import bgImage from "../../assets/images/shopbanner.jpg";
import Heading from "../../component/Heading/Heading";
import {useSearchParams} from "react-router-dom";
import SearchServices from "../../services/SearchServices";
import ProductCard from "../../component/ProductCard/ProductCard";

const SearchResultsPage = () => {
    // const { cat, term } = useParams();
    const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams()
    const cat = searchParams.get("category");
    const term = searchParams.get("term");

    useEffect(() => {
        SearchServices.searchResults(cat, term)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [cat, term]);

    const renderedProducts = () => {
        return products.map(product => {
            return <ProductCard product={product} key={product._id}/>
        })
    }

    return (
        <>
            <Heading title="SEARCH RESULTS" bgImage={bgImage}></Heading>
            <section className="container products_content">
                <div className="shop__wrapper">
                    <h2 className="shop__search-title">Search results for <span>{term}</span>
                    </h2>

                    {products.length !== 0 ?
                        <>
                            <div className="products__container">
                                {renderedProducts()}
                            </div>
                        </>
                        :
                        <>
                            <div className="shop__results-wrap">
                                <h4>Nothing was found, please try again.</h4>
                            </div>
                        </>
                    }

                </div>
            </section>
        </>
    );
};

export default SearchResultsPage;
