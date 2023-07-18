import CarouselGroup from '../CarouselGroup/CarouselGroup';
import FilteredItem from '../FilteredItem/FilteredItem';
import { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';

const CategoryFilteredContainer = ({ categoryId }) => {
  const { datos, cartas } = useContext(ProductsContext);

  const items = datos.filter(dato => dato.category === categoryId);
  return (
    <div className="categoryFilteredContainer">
      <div className="categoryFilteredItemList">
        {items.map(dato => {
          return <FilteredItem data={dato} key={dato.id} />;
        })}
      </div>
    </div>
  );
};

export default CategoryFilteredContainer;
