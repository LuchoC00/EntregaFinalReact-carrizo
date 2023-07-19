import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Rating, TextField } from '@mui/material';
import { useState } from 'react';
import './CartItem.css';

const CartItem = ({ item }) => {
  const [countValue, setCountValue] = useState(item.count);
  const maxCount = item.data.stock;

  const handleRightButtonOfClick = () => {
    if (countValue < maxCount) {
      setCountValue(value => {
        return value + 1;
      });
    }
  };
  const handleLeftButtonOfClick = () => {
    if (countValue > 0) {
      setCountValue(value => {
        return value - 1;
      });
    }
  };

  const handleTextFieldOfChange = e => {
    let newValue = parseInt(e.target.value);
    if (isNaN(newValue)) {
      setCountValue(0);
    } else if (newValue <= maxCount) {
      setCountValue(newValue);
    } else if (newValue > maxCount) {
      setCountValue(maxCount);
    }
  };
  return (
    <div className="cartItem">
      <div className="cartItemImage">
        <img src={item.data.image} alt="item" width={'100%'} height={'100%'} />
      </div>
      <div className="cartItemData">
        <div className="cartItemTitle">{item.data.title.slice(0, 50)}</div>
        <div className="cartItemSubTitles">
          <div className="cartItemCategory">{item.data.category}</div>
          <div className="cartItemRating">
            <Rating
              name="half-rating-read"
              defaultValue={item.data.rating}
              precision={0.5}
              readOnly
            />
          </div>
        </div>
        <div className="priceSelector">
          <div className="cartSelectorContainer">
            <button
              className="leftCountCartSelector"
              onClick={handleLeftButtonOfClick}
            >
              <ArrowBackIosNewIcon />
            </button>
            <TextField
              className="cartSelectorTextField"
              label="cantidad"
              variant="outlined"
              value={countValue}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              onChange={handleTextFieldOfChange}
            />
            <button
              className="rightCountCartSelector"
              onClick={handleRightButtonOfClick}
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
          <div className="totalPrice">
            Precio : ${item.data.price * countValue}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
