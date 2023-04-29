import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../store/cartSlice";
import {routes} from "../../router/routes";
import {Link} from "react-router-dom";

const ModalItemsInCart = ({cart}) => {
    const dispatch = useDispatch();

    return (
        <div className="modal__wrapper ">
            <div className="main__wrapper">
                {cart.map((el) => {
                    return (
                        <li key={el._id}>
                            <div className="single__element__wrapper">
                                <div
                                    onClick={() => dispatch(removeFromCart(el._id))}
                                    className="remove__item"
                                >
                                    X
                                </div>
                                <div className="single__element__image">
                                    <img className="thumbnail" src={el.thumbnail} alt={el.title}/>
                                </div>
                                <div className="single__element__infos">
                                    <p className="single__element__title">{el.title}</p>
                                    <p className="single__quantity_and_price">
                                        <span>{el.quantity}</span> x <span>{el.price}</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </div>
            <div className="buttons">
                <Link className="button" to={routes.CART.path}>View Cart</Link>
                <button className="button">Check out</button>
            </div>
        </div>
    );
};

export default ModalItemsInCart;
