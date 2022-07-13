import React, { useEffect, useState, useRef } from 'react';

import styled, { keyframes, css } from 'styled-components';
import { useTheme } from '../context/themeProvider';

import Header from '../components/Layout/Header';
import ThemeToggle from '../components/Button/ThemeToggle';

import Top from './Top';
import About from './About';
import Project from './Project';
import Contact from './Contact';

const Main = styled.main`
  section {
    &:nth-child(2) {
      background: ${(props) =>
        props.theme === 'light' ? '#f5f5f5' : '#0B0B0B'};
    }
  }
`;

const slide = keyframes`
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0%);
  }
`;

const MenuHeader = styled(Header)`
  ${(props) =>
    props.sticky &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 5rem;
      padding: 20px 0;
      animation: ${slide} 0.3s;
      box-shadow: 0 20px 30px rgba(#000, 0.2);
    `};
`;

const Portfolio = () => {
  const [ThemeMode, toggleTheme] = useTheme();

  const [sticky, setSticky] = useState('');
  const tabRefs = useRef([]);

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = () => {
    let vh = window.innerHeight;
    const scrollTop = window.scrollY;
    const stickyClassName = scrollTop >= vh - 10 ? 'scrollDown' : '';
    setSticky(stickyClassName);
  };

  const scrollHandler = (index = 0) => {
    tabRefs.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <>
      {sticky && <MenuHeader sticky={sticky} onScroll={scrollHandler} />}
      <ThemeToggle toggle={toggleTheme} mode={ThemeMode} theme={ThemeMode}>
        DarkMode
      </ThemeToggle>
      <Main theme={ThemeMode}>
        <section ref={(el) => (tabRefs.current[3] = el)}>
          <Top onScroll={scrollHandler} theme={ThemeMode} />
        </section>
        <section ref={(el) => (tabRefs.current[0] = el)}>
          <About theme={ThemeMode} />
        </section>
        <section ref={(el) => (tabRefs.current[1] = el)}>
          <Project theme={ThemeMode} />
        </section>
        <section ref={(el) => (tabRefs.current[2] = el)}>
          <Contact theme={ThemeMode} />
        </section>
      </Main>
    </>
  );
};

export default Portfolio;
