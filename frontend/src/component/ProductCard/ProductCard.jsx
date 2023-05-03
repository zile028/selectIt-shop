import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../store/cartSlice";
import {MdFavoriteBorder, MdOutlineVisibility, MdComment, MdFavorite} from "react-icons/md";
import UserServices from "../../services/UserServices";
import {setUser} from "../../store/userSlice";

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.userStore)

    const addFavoriteHandler = () => {
        UserServices.addToFavorite({productId: product._id, userId: user._id})
            .then((result) => {
                dispatch(setUser(result.data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const removeFavoriteHandler = () => {

    };
    
    return (
        <div className="product__card">
            <Link to={"/product/" + product._id} className="product__img-holder">
                <div style={{backgroundImage: "url(" + product.thumbnail + ")"}} className="product__thumbnail"/>
                <div className="product__img-overlay"/>
            </Link>
            <div className="product__hover-content">
                <button className="button button--primary product__btn-primary" onClick={() => {
                    dispatch(addToCart({product, quantity: 1}))
                }}>Add to cart
                </button>
                <div className="product__hover-group">

                    {user?.favorites?.includes(product._id) ?

                        <button className="product__btn" onClick={removeFavoriteHandler}>
                            <MdFavorite/>
                        </button>
                        :
                        <button className="product__btn" onClick={addFavoriteHandler}>
                            <MdFavoriteBorder/>
                        </button>
                    }

                    <button className="product__btn">
                        <MdOutlineVisibility/>
                    </button>
                    <button className="product__btn">
                        <MdComment/>
                    </button>
                </div>
            </div>
            <Link to={"/product/" + product._id} className="product__link">
                <h3 className="product__title">{product.title}</h3>
                <p className="product__price">{product.price}$</p>
            </Link>
        </div>
    )
}

export default ProductCard