import React from 'react';

import styled from 'styled-components';

import Button from '../UI/Button';

const HeaderContainer = styled.header`
  width: auto;
  height: 5rem;
  background-color: transparent;

  nav {
    height: 100%;
    display: flex;
    padding: 0;
    align-items: center;
  }
`;

const Header = ({ className, onScroll }) => {
  const navItems = ['TOP', 'ABOUT', 'PROJECT', 'CONTACT'];

  const onScrollHandler = (index) => {
    onScroll(index);
  };

  return (
    <>
      <HeaderContainer className={`${className}`}>
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
      </HeaderContainer>
    </>
  );
};

export default Header;
