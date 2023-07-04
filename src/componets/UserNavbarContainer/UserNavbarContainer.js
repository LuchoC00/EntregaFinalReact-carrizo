import { IconButton } from '@mui/material';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import './UserNavbarContainer.css';

const UserNavbarContainer = () => {
  return (
    <div className="userNavbarContainer">
      <div>UserName</div>
      <div className="userNavbarLogo">
        <IconButton>
          <AccountCircleTwoToneIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default UserNavbarContainer;
