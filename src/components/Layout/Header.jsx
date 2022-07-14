import React, { useState } from 'react';

import styled from 'styled-components';
import MenuButton from '../Button/MenuButton';
import media from '../../theme/media';

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

  ${media.large`
    .burger__menu,
    .x__menu {
      display: none;
    }
`};

  ${media.medium`
    .burger__menu,
    .x__menu {
      display: block;
      margin-left: 1rem;;
      cursor: pointer;
    }
  
    .burger__menu > div,
    .x__menu > div {
      width: 25px;
      height: 3px;
      background-color: black;
      margin: 5px;
      transition: all 0.3s ease;
    }
  
    .x__menu > .burger_line1 {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
  
    .x__menu > .burger_line2 {
      opacity: 0;
    }
  
    .x__menu > .burger_line3 {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  
    .menu__box__visible {
      height: 28%;
      position: fixed;
      left: 0;
      top: 1.5rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    .menu__box__hidden {
      display: none;
    }
  `};
`;

const Header = ({ className, onScroll }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const navItems = ['ABOUT', 'PROJECT', 'CONTACT'];

  const onScrollHandler = (index) => {
    onScroll(index);
  };

  return (
    <>
      <HeaderContainer className={`${className}`}>
        <div
          className={!menuToggle ? 'burger__menu' : 'x__menu'}
          onClick={() =>
            menuToggle ? setMenuToggle(false) : setMenuToggle(true)
          }
        >
          <div className='burger_line1'></div>
          <div className='burger_line2'></div>
          <div className='burger_line3'></div>
        </div>

        <nav
          className={[
            'menu__box',
            !menuToggle ? 'menu__box__hidden' : 'menu__box__visible',
          ].join(' ')}
        >
          {navItems.map((item, index) => (
            <MenuButton
              key={index}
              size='small'
              className='menu__item'
              onClick={() => {
                onScrollHandler(index);
                setMenuToggle(false);
              }}
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
