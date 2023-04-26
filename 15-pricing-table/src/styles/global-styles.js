import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    width: 100vw;
    height: 100vh;
  }

  #root{
    width: 100%;
    height: 100%;
    /* background-color: red; */
  }
`;
