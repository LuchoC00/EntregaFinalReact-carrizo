import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import './CategoryItem.css';

const CategoryItem = ({ item }) => {
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
      <p className="categoryTitle">{item?.title}</p>
      {goToPage && <Navigate to={`/category/${item.title}`} />}
    </div>
  );
};

export default CategoryItem;
