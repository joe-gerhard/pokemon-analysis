import React from 'react';
import { StyledApp } from './styles';
import Navbar from '../Navbar';
import PageDisplay from '../PageDisplay/PageDisplay';

function App() {
  return (
    <StyledApp>
      <Navbar />
      <PageDisplay />
    </StyledApp>
  );
}

export default App;
