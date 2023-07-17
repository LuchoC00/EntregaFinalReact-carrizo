import React from 'react';
import './CategoryItem.css';

const CategoryItem = ({ item }) => {
  const handleOfClick = () => {
    console.log(`category:${item.title}`);
  };
  return (
    <div
      className="categoryItem"
      style={{ backgroundImage: `url(${item?.image})` }}
      onClick={handleOfClick}
    >
      <p className="categoryTitle">{item?.title}</p>
    </div>
  );
};

export default CategoryItem;
