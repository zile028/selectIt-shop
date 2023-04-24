import React, {useState} from "react";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import ModalItemsInCart from "../ModalItemsInCart/ModalItemsInCart";

const Cart = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {cart, totalPrice} = useSelector((store) => store.cartStore);


  const handleMouseEnter = () => {
    setIsModalVisible(true);
  };

  const handleMouseLeave = () => {
    setIsModalVisible(false);
  };

  return (
      <div
          className="cart__wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      >
        <div className="cart__mainhero">
          <div className="cart__icon">
            <AiOutlineShoppingCart style={{color: "white"}}/>
          </div>
          <div className="cart__right">
            <h3 className="cart__title">SHOPING CART</h3>
            <div className="cart__infos">
            <span className="cart__items">
              {`(${cart.length})`}{" "}
              {`${cart.length === 1 ? "item -" : "items -"}`}
            </span>
              <span className="cart__total">{totalPrice}</span>
            </div>
          </div>
        </div>
        {isModalVisible && (
            <ModalItemsInCart cart={cart} totalPrice={totalPrice}/>
        )}
      </div>
  );
};

export default Cart;
