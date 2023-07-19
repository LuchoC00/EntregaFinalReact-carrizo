import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TextField } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState, useContext, useEffect } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import './ItemCountSelector.css';

const ItemCountSelector = ({ data }) => {
  const [itemsCount, setItemsCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);
  useEffect(() => {
    setMaxCount(data.stock);
  }, [data]);

  const handleRightButtonOfClick = () => {
    if (itemsCount < maxCount) {
      setItemsCount(value => {
        return value + 1;
      });
    }
  };
  const handleLeftButtonOfClick = () => {
    if (itemsCount > 0) {
      setItemsCount(value => {
        return value - 1;
      });
    }
  };

  const handleTextFieldOfChange = e => {
    let newValue = parseInt(e.target.value);
    if (isNaN(newValue)) {
      setItemsCount(0);
    } else if (newValue <= maxCount) {
      setItemsCount(newValue);
    } else if (newValue > maxCount) {
      setItemsCount(maxCount);
    }
  };

  const { addToCart } = useContext(ProductsContext);
  const handleToCartOfClick = () => {
    for (let index = 0; index < itemsCount; index++) {
      addToCart(data);
    }
    setItemsCount(0);
  };

  return (
    <div className="itemsCountSelector">
      <div className="selectorContainer">
        <button className="leftCountSelector" onClick={handleLeftButtonOfClick}>
          <ArrowBackIosNewIcon />
        </button>
        <TextField
          label="cantidad"
          variant="outlined"
          value={itemsCount}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={handleTextFieldOfChange}
        />
        <button
          className="rightCountSelector"
          onClick={handleRightButtonOfClick}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
      <button className="addToCart" onClick={handleToCartOfClick}>
        <AddShoppingCartIcon />
      </button>
    </div>
  );
};

export default ItemCountSelector;
