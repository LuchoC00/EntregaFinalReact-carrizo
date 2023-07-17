import Header from '../../componets/Header/Header';
import CarouselGroup from '../../componets/CarouselGroup/CarouselGroup';
import CategoryFilteredContainer from '../../componets/CategoryFilteredContainer/CategoryFilteredContainer';
import { useState, useEffect } from 'react';
import './CategoryPage.css';

const CategoryPage = () => {
  const [categorySelected, setCategorySelected] = useState(null);
  const [isValidCategory, SetIsValidCategory] = useState(false);

  const [itemsFiltered, setItemsFiltered] = useState([]);

  return (
    <div className="categoryPage">
      <Header />
      {!categorySelected && <CategoryFilteredContainer />}
      {categorySelected}
      <div className="categoryFilteredContainer">
        <CarouselGroup />
        <div className="categoryFilteredItemList">{}</div>
      </div>
    </div>
  );
};

export default CategoryPage;
