import React from 'react';

import styles from './Header.module.css';

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
    </>
  );
};

export default Header;
