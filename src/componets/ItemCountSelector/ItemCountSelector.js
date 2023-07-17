import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { TextField } from '@mui/material';

const ItemCountSelector = ({ maxCount = 0 }) => {
  const [itemsCount, setItemsCount] = useState(0);

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
    if (newValue <= maxCount) {
      setItemsCount(newValue);
    }
  };
  return (
    <div className="itemsCountSelector">
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
      <button className="rightCountSelector" onClick={handleRightButtonOfClick}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default ItemCountSelector;
