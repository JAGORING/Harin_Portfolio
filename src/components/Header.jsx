import React from 'react';

import styles from './Header.module.css';

import Button from './UI/Button';

const Header = ({ className, onScroll }) => {
  const navItems = ['TOP', 'ABOUT', 'PROJECT', 'CONTACT'];

  const onScrollHandler = (index) => {
    onScroll(index);
  };

  return (
    <>
      <header className={`${styles.header} ${className}`}>
        <nav>
          {navItems.map((item, index) => (
            <Button
              key={index}
              size='small'
              onClick={() => onScrollHandler(index)}
            >
              {item}
            </Button>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
