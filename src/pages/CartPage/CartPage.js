import Header from '../../componets/Header/Header';
import CartListContainer from '../../componets/CartListContainer/CartListContainer';
import './CartPage.css';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div className="cartPage">
      <Header />
      <CartListContainer />
      <div className="cartButtons">
        <Link to={'/'}>
          <button className="backToHome">Home </button>
        </Link>
        <button className="buyProducts">Comprar</button>
      </div>
    </div>
  );
};

export default CartPage;
