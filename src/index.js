import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '../src/context/themeProvider';
import { GlobalStyle } from './theme/GlobalStyle';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </HashRouter>
);
