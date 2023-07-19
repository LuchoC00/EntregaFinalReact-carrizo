import React from 'react';
import './TextError.css';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

const TextError = ({ error }) => {
  let errorLogo = error ? <WarningAmberRoundedIcon /> : '';
  return (
    <div className="errorText">
      {errorLogo}
      <p>{error}</p>
    </div>
  );
};

export default TextError;
