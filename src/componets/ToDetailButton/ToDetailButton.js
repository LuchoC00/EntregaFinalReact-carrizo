import React from 'react';

const ToDetailButton = ({ data }) => {
  const goToDelail = () => {
    console.log('adios');
  };

  return (
    <button className="toDetailButton" onClick={ToDetailButton}>
      Ver mas
    </button>
  );
};

export default ToDetailButton;
