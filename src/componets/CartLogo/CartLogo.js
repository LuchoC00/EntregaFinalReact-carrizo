import { IconButton } from '@mui/material';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Link } from 'react-router-dom';

const CartLogo = () => {
  return (
    <div className="cartLogo">
      <Link to={'/cart'}>
        <IconButton>
          <ShoppingCartTwoToneIcon />
        </IconButton>
      </Link>
    </div>
  );
};

export default CartLogo;
