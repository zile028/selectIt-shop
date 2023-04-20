import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {

  return (
    <div className="product__card">
        <Link to={"/product/" + product._id} className="product__img-holder">
              <div style={{backgroundImage: "url(" + product.thumbnail + ")"}} className="product__thumbnail"/>
              <div className="product__img-overlay" />
        </Link>
        <div className="product__hover-content">
            <button className="button button--primary">Add to cart</button>
        </div>
        <Link to={"/product/" + product._id} className="product__link">
          <h3 className="product__title">{product.title}</h3>
          <p className="product__price">{product.price}$</p>
        </Link>
    </div>
  )
}

export default ProductCard