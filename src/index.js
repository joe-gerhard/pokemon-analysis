import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App'
import theme from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
, document.getElementById('root'));

