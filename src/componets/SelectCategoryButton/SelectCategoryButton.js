import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import './SelectCategoryButton.css';
import { Link } from 'react-router-dom';

const SelectCategoryButton = () => {
  const { category } = useContext(ProductsContext);

  const [isHover, setIsHover] = useState(false);
  const [isActiveList, setIsActiveList] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
    setIsActiveList(false);
  };

  const handlePrimaryButtonCLick = () => {};

  const handleListButtonCLick = () => {
    setIsActiveList(true);
  };
  return (
    <div
      className="selectCategoryButton"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="buttonsContainers">
        <button className="primaryButton">
          <Link to={`/category/`}>Category</Link>
        </button>
        <button className="listButton" onClick={handleListButtonCLick}>
          <KeyboardArrowDownIcon />
        </button>
      </div>
      {isActiveList && isHover && (
        <div className="floatingList">
          {category?.map(categoryData => {
            return (
              <Link
                className="selectCategoryItem"
                to={`/category/${categoryData.name}`}
                key={categoryData.name}
              >
                {categoryData.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectCategoryButton;
