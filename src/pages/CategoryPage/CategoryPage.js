import Header from '../../componets/Header/Header';
import CarouselGroup from '../../componets/CarouselGroup/CarouselGroup';
import SelectCategoriesContainer from '../../componets/SelectCategoriesContainer/SelectCategoriesContainer';
import CategoryFilteredContainer from '../../componets/CategoryFilteredContainer/CategoryFilteredContainer';
import { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import './CategoryPage.css';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { datos } = useContext(ProductsContext);
  const pageId = useParams();
  const [categorySelected, setCategorySelected] = useState(null);
  const [isValidCategory, SetIsValidCategory] = useState(false);

  const [itemsFiltered, setItemsFiltered] = useState([]);

  return (
    <div className="categoryPage">
      <Header />
      {!pageId?.categoryId ? (
        <SelectCategoriesContainer />
      ) : (
        <CategoryFilteredContainer />
      )}
    </div>
  );
};

export default CategoryPage;
