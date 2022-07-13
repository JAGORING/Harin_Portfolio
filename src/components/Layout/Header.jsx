import React from 'react';

import styled from 'styled-components';
import MenuButton from '../Button/MenuButton';

const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  background-color: transparent;
  z-index: 10;

  nav {
    height: 100%;
    display: flex;
    padding: 0;
    align-items: center;
  }
`;

const Header = ({ className, onScroll }) => {
  const navItems = ['ABOUT', 'PROJECT', 'CONTACT'];

  const onScrollHandler = (index) => {
    onScroll(index);
  };

  return (
    <>
      <HeaderContainer className={`${className}`}>
        <nav>
          {navItems.map((item, index) => (
            <MenuButton
              key={index}
              size='small'
              onClick={() => onScrollHandler(index)}
            >
              {item}
            </MenuButton>
          ))}
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
