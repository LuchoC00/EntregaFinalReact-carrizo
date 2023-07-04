import React from 'react';

const DividerLine = ({ bgColor = 'gray' }) => {
  const styles = {
    backgroundColor: bgColor,
    width: '1px',
    height: 'auto'
  };

  return <div className="dividerLine" style={styles}></div>;
};

export default DividerLine;
