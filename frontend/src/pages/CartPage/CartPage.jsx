import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeQuantityCart, removeFromCart} from "../../store/cartSlice";
import {TiDeleteOutline} from "react-icons/ti";
import {Link} from "react-router-dom";
import {routes} from "../../router/routes";


function CartPage() {
    const {cart, totalPrice} = useSelector(state => state.cartStore)
    const dispatch = useDispatch()

    const changeQuantityHandler = (id, count) => {
        dispatch(changeQuantityCart({id, count}))
    }
    const renderProduct = () => {

        return cart.map((item) => {
            return <tr className="product-row" key={item._id}>

                <th className="product-section">
                    <div>
                        <img className="product-image" src={item.images[0]} alt="products"/>

                    </div>
                    <div className='title-section'>
                        <p className='product-title'>{item.title}</p>
                        <p>Rating: <span className="product-rating">{item.rating}</span></p>
                        <p>Stock: <span className="product-rating">{item.stock}</span></p>
                    </div>
                </th>

                <th className="product-pricing vertical-align">${item.price}</th>
                <th className="product-quantity vertical-align">
                    <button className="product-btn "
                            onClick={() => changeQuantityHandler(item._id, -1)}
                    >-
                    </button>
                    <div className="item-quantity">{item.quantity}</div>
                    <button className="product-btn" onClick={() => changeQuantityHandler(item._id, 1)}>+
                    </button>
                </th>
                <th className="product-pricing vertical-align ">${item.total}</th>
                <th className="vertical-align">
                    <button className="product-remove-btn"
                            onClick={() => dispatch(removeFromCart(item._id))}>
                        <TiDeleteOutline className="product-icon"/>
                    </button>
                </th>
            </tr>
        })
    }

    return (
        <section className="container">
            <table className="table cart-table">
                <thead>
                <tr className="table-header">
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>

                </tr>
                </thead>
                <tbody>
                {renderProduct()}
                </tbody>
                <tfoot>
                <tr className="cart-total">
                    <td colSpan={3}>Total:</td>
                    <td>${totalPrice}</td>
                    <td></td>
                </tr>
                </tfoot>
            </table>
            <Link className="button button--primary" to={routes.CHECKOUT.path}>Go to checkout</Link>
        </section>
    );
}

export default CartPage;


