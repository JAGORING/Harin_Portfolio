import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Info from './pages/Info';
import Skills from './pages/Skills';
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
      <Switch>
        <Route path='/' exact component={Portfolio} />
        <Route path='/about/info' component={Info} />
        <Route path='/about/skills' component={Skills} />
      </Switch>
    </div>
  );
};

export default App;
