import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styles from './Header.module.css';

import Info from '../pages/Info';
import Skills from '../pages/Skills';

const Header = (props) => {
  return (
    <>
      <header className={`${styles.header} ${props.className}`}>
        <nav>
          <ul>
            <li>
              <div>TOP</div>
            </li>
            <li>
              <div>ABOUT</div>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path='/about/info'>
          <Info />
        </Route>
        <Route path='/about/skills'>
          <Skills />
        </Route>
      </Switch>
    </>
  );
};

export default Header;
