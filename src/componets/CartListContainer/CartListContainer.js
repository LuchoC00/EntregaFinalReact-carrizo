import { useContext, useState } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import CartItem from '../CartItem/CartItem';
import './CartListContainer.css';

const CartListContainer = () => {
  const { cart } = useContext(ProductsContext);

  const newCart = [];
  const cartCount = [];
  cart.forEach(product => {
    if (!newCart.includes(product)) {
      newCart.push(product);
      cartCount[newCart.length - 1] = 1;
    } else {
      cartCount[newCart.indexOf(product)] += 1;
    }
  });

  return (
    <div className="cartListContainer">
      {newCart.length > 0 &&
        newCart.map((item, index) => {
          return (
            <CartItem
              item={{ data: item, count: cartCount[index] }}
              key={item.title + index}
            />
          );
        })}
      {cart.length === 0 && <div className="cartEmpty"></div>}
    </div>
  );
};

export default CartListContainer;
