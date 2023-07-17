import { useState, useEffect } from 'react';
import CategoryItem from '../../componets/CategoryItem/CategoryItem';

const SelectCategoriesContainer = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setDatos(json));
  }, []);
  return (
    <div className="SelectCategoriesContainer">
      {datos.map(dato => {
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
