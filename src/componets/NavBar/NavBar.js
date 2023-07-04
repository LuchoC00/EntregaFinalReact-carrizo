import React from 'react';
import Searcher from '../Searcher/Searcher';
import CartLogo from '../CartLogo/CartLogo';
import DividerLine from '../DividerLine/DividerLine';
import UserNavbarContainer from '../UserNavbarContainer/UserNavbarContainer';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBarLogo">
        <LogoDevIcon />
      </div>
      <div className="searcherContainer">
        <Searcher />
      </div>
      <div className="navBarMenu">
        <CartLogo />

        <UserNavbarContainer />
      </div>
    </div>
  );
};

export default NavBar;
