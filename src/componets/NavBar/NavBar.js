import React from 'react';
import CartLogo from '../CartLogo/CartLogo';
import UserNavbarContainer from '../UserNavbarContainer/UserNavbarContainer';
import SelectCategoryButton from '../SelectCategoryButton/SelectCategoryButton';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBarLogo">
        <LogoDevIcon />
      </div>
      <div className="middleContainer">
        <SelectCategoryButton />
      </div>
      <div className="navBarMenu">
        <CartLogo />

        <UserNavbarContainer />
      </div>
    </div>
  );
};

export default NavBar;
