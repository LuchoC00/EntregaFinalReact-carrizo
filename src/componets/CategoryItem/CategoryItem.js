import { Navigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import './CategoryItem.css';

const CategoryItem = ({ item }) => {
  const { category, usarUnaVez2 } = useContext(ProductsContext);
  const [goToPage, setGoToPage] = useState(false);
  const handleOfClick = () => {
    setGoToPage(true);
  };
  return (
    <div
      className="categoryItem"
      style={{ backgroundImage: `url(${item?.image})` }}
      onClick={handleOfClick}
    >
      <p className="categoryTitle">{item?.name}</p>
      {goToPage && <Navigate to={`/category/${item?.name}`} />}
    </div>
  );
};

export default CategoryItem;
