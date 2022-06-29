import React from 'react';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Info from './pages/Info';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';

const App = () => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      <Switch>
        <Route path='/' exact>
          <Portfolio />
        </Route>
        <Route path='/about/info' component={Info} />
        <Route path='/about/skills' component={Skills} />
      </Switch>
    </>
  );
};

export default App;
