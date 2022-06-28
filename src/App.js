import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Portfolio from './pages/Portfolio';

const App = () => {
  const [sticky, setSticky] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClassName = scrollTop >= 600 ? 'scrollDown' : '';
    setSticky(stickyClassName);
  };

  return (
    <div>
      {sticky && <Header className={sticky} />}
      <main>
        <Portfolio />
      </main>
    </div>
  );
};

export default App;
