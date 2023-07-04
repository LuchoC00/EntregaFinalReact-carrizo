import { IconButton } from '@mui/material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

const CartLogo = () => {
  return (
    <div className="cartLogo">
      <IconButton>
        <ShoppingCartTwoToneIcon />
      </IconButton>
    </div>
  );
};

export default CartLogo;
