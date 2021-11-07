import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import { Home } from './Home';
import theme from './theme';
import {ThemeProvider} from 'styled-components';
import {Reset} from 'styled-reset'

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Reset/>
      <Home />
    </ThemeProvider>
  );
}

export default App;
