import React from 'react';

const MenuItem = ({ size, onClick, children }) => {
  return (
    <li size={size} onClick={onClick}>
      <span>{children}</span>
    </li>
  );
};

export default MenuItem;
