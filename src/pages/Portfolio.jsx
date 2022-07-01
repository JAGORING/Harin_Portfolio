import React, { useEffect, useState, useRef } from 'react';

import styled, { keyframes, css } from 'styled-components';

import Header from '../components/Header';

import Top from './Top';
import About from './About';
import Project from './Project';
import Contact from './Contact';

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
      background: rgba(#f3f3f3, 0.5);
    `};
`;

const Portfolio = () => {
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
    const stickyClassName = scrollTop >= vh ? 'scrollDown' : '';
    setSticky(stickyClassName);
  };

  const scrollHandler = (index) => {
    tabRefs.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <>
      {sticky && <MenuHeader sticky={sticky} onScroll={scrollHandler} />}

      <main>
        <section ref={(el) => (tabRefs.current[0] = el)}>
          <Top />
        </section>
        <section ref={(el) => (tabRefs.current[1] = el)}>
          <About />
        </section>
        <section ref={(el) => (tabRefs.current[2] = el)}>
          <Project />
        </section>
        <section ref={(el) => (tabRefs.current[3] = el)}>
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Portfolio;
