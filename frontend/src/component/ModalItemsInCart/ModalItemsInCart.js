import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

const ModalItemsInCart = ({ cart }) => {
  //   const { cart, totalPrice } = useSelector((store) => store.cartStore);
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
                  <img className="thumbnail" src={el.thumbnail} />
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
        <button className="button">View Cart</button>
        <button className="button">Check out</button>
      </div>
    </div>
  );
};

export default ModalItemsInCart;
