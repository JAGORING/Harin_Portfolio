import React, { useEffect, useState, useRef } from 'react';

import Header from '../components/Header';

import Top from './Top';
import About from './About';
import Project from './Project';
import Contact from './Contact';

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
      {sticky && <Header className={sticky} onScroll={scrollHandler} />}

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
