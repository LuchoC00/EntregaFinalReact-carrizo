import React from 'react';
import CartLogo from '../CartLogo/CartLogo';
import SelectCategoryButton from '../SelectCategoryButton/SelectCategoryButton';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBarLogo">
        <Link to={'/'}>
          <LogoDevIcon />
        </Link>
      </div>
      <div className="middleContainer">
        <SelectCategoryButton />
      </div>
      <div className="navBarMenu">
        <CartLogo />
      </div>
    </div>
  );
};

export default NavBar;
