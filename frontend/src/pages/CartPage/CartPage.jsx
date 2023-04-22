import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeQuantityCart, removeFromCart} from "../../store/cartSlice";

function CartPage() {
    const {cart, totalPrice} = useSelector(state => state.cartStore)
    const dispatch = useDispatch()

    const changeQuantityHandler = (id, count) => {
        dispatch(changeQuantityCart({id, count}))
    }
    const renderProduct = () => {
        return cart.map((item) => {
            return <tr key={item._id}>
                <th>{item.title}</th>
                <th>{item.price}</th>
                <th>
                    <button className="btn btn-sm btn-info"
                            onClick={() => changeQuantityHandler(item._id, -1)}
                    >-
                    </button>
                    {item.quantity}
                    <button className="btn btn-sm btn-info" onClick={() => changeQuantityHandler(item._id, 1)}>+
                    </button>
                </th>
                <th>{item.total}</th>
                <th>
                    <button className="btn btn-sm btn-danger"
                            onClick={() => dispatch(removeFromCart(item._id))}>
                        Remove
                    </button>
                </th>
            </tr>
        })
    }

    return (
        <section className="container">
            <table className="table">
                <thead>
                <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {renderProduct()}
                </tbody>
                <tfoot>
                <tr>
                    <td colSpan={3}>Total</td>
                    <td>{totalPrice}</td>
                    <td></td>
                </tr>
                </tfoot>
            </table>
        </section>
    );
}

export default CartPage;