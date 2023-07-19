import Header from '../../componets/Header/Header';
import CartListContainer from '../../componets/CartListContainer/CartListContainer';
import './CartPage.css';
import { Link, Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

const CartPage = () => {
  const { cart } = useContext(ProductsContext);
  const [goToLogin, setGoToLogin] = useState(false);
  const handleBuy = () => {
    setGoToLogin(true);
  };
  return (
    <div className="cartPage">
      <Header />
      <CartListContainer />
      <div className="cartButtons">
        <Link to={'/'}>
          <button className="backToHome">Home </button>
        </Link>
        {cart && cart.length > 0 && (
          <button className="buyProducts" onClick={handleBuy}>
            Comprar
          </button>
        )}
      </div>
      {goToLogin && <Navigate to={'/login'} />}
    </div>
  );
};

export default CartPage;
