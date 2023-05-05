import {useEffect, useState} from "react";
import ProductService from "../../services/productService";
import {useParams} from "react-router-dom";
import ProductDetails from "../../component/SingleProduct/ProductDetails";
import ProductInfo from "../../component/SingleProduct/ProductInfo";
import LatestProducts from "../../component/LatestProducts/LatestProducts";
import Heading from "../../component/Heading/Heading";
import bgImage from "../../assets/images/productbanner.jpg";
import AxiosErrorPage from "../ErrorPage/AxiosErrorPage";
import {useMutation, useQuery} from "@tanstack/react-query";

const SingleProductPage = () => {
    const [product, setProduct] = useState({});
    const [axiosError, setAxiosError] = useState(null);
    const {id} = useParams();
    // const {isSuccess, refetch} = useQuery({
    //     queryKey: ["productSingle"],
    //     queryFn: () => ProductService.getProductDetails(id),
    //     onSuccess: (value) => {
    //         setProduct(value.data)
    //     },
    //     enabled: false
    // })

    const {isSuccess, mutate} = useMutation({
        mutationKey: ["product"],
        mutationFn: (xx) => {
            console.log(xx)
            return ProductService.getProductDetails(xx ? xx : id)
        },
        onSuccess: (response) => {
            setProduct(response.data)
        }
    })
    useEffect(() => {
        mutate()
    }, []);


    return isSuccess && (
        <>
            <Heading title="PRODUCT DETAILS" bgImage={bgImage}/>
            {/*<button onClick={() => {*/}
            {/*    mutate("643677fcb25d9c0810defa2b")*/}
            {/*}}>REFETCH*/}
            {/*</button>*/}
            <div className="container">
                {axiosError ? (
                    <AxiosErrorPage axiosError={axiosError}/>
                ) : (
                    <>
                        <div className="single-product__data">
                            <ProductDetails product={product}/>
                            <ProductInfo product={product}/>
                        </div>
                        <LatestProducts/>
                    </>
                )}
            </div>
        </>
    );
};

export default SingleProductPage;
