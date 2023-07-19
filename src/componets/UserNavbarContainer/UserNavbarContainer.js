import { IconButton } from '@mui/material';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import './UserNavbarContainer.css';
import { useContext } from 'react';

const UserNavbarContainer = () => {
  const { acount } = useContext;
  return (
    <div className="userNavbarContainer">
      <div>UserName</div>
      <div
        className="userNavbarLogo"
        style={{ backgroundColor: `${acount ? 'green' : 'blue'}` }}
      >
        <IconButton>
          <AccountCircleTwoToneIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default UserNavbarContainer;
