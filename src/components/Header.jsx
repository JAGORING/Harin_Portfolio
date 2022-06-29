import React from 'react';

import styles from './Header.module.css';

import MenuItem from './UI/MenuItem';

const Header = ({ className, onScroll }) => {
  const navItems = ['TOP', 'ABOUT', 'PROJECT', 'CONTACT'];

  const onScrollHandler = (index) => {
    onScroll(index);
  };

  return (
    <>
      <header className={`${styles.header} ${className}`}>
        <nav>
          <ul>
            {navItems.map((item, index) => (
              <MenuItem
                key={index}
                size='small'
                onClick={() => onScrollHandler(index)}
              >
                {item}
              </MenuItem>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
