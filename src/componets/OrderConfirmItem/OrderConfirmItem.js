import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import './OrderConfirmItem.css';

const OrderConfirmItem = () => {
  const { lastOrderId } = useContext(ProductsContext);
  return (
    <div className="orderConfirmItem">
      <p>La orden se guardo con el id: {lastOrderId}</p>
    </div>
  );
};

export default OrderConfirmItem;
