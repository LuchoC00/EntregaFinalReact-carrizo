import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import CategoryItem from '../../componets/CategoryItem/CategoryItem';
import './SelectCategoriesContainer.css';

const SelectCategoriesContainer = () => {
  const { category, datos } = useContext(ProductsContext);
  return (
    <div className="selectCategoriesContainer">
      {category?.map(dato => {
        return (
          <CategoryItem
            item={dato}
            className="category"
            key={`category:${dato.id}`}
          />
        );
      })}
    </div>
  );
};

export default SelectCategoriesContainer;
