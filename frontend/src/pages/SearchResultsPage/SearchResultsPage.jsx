import React, { useEffect, useState } from "react";
import bgImage from "../../assets/images/shopbanner.jpg";
import Heading from "../../component/Heading/Heading";
import { useParams } from "react-router-dom";
import SearchServices from "../../services/SearchServices";

const SearchResultsPage = () => {
  const { term } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    SearchServices.searchResults(term)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [term]);

  return (
    <>
      <Heading title="SEARCH RESULTS" bgImage={bgImage}></Heading>
      <section className="container products_content">
        <div className="shop__wrapper">
          <h2>Search results for {term}</h2>
          <div className="products__container">Products results</div>
        </div>
      </section>
    </>
  );
};

export default SearchResultsPage;
