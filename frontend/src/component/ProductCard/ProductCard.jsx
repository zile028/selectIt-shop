import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {

  return (
    <Link className="product__card">
        <div className="product__img-holder">
            <div style={{backgroundImage: "url(" + product.thumbnail + ")"}} className="product__thumbnail"/>
            <div className="product__img-overlay" />
        </div>
        <div className="product__hover-content">
            <button className="button button--primary">Add to cart</button>
        </div>
        <h3 className="product__title">{product.title}</h3>
        <p className="product__price">{product.price}$</p>
    </Link>
  )
}

export default ProductCard