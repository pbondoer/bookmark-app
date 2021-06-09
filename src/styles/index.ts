import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import '@fontsource/open-sans/400';

export const GlobalStyles = createGlobalStyle`
  // normlize.css styles
  ${normalize}

  // Applied to the div containing the React app
  // These styles make sure our app takes the whole screen
  #app {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hidden {
    display: none;
  }

  // Our global styles
  html, body {
    font-family: "Open Sans";
    font-size: ${p => p.theme.fontSizePx.regular};
    height: 100%;

    background-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.text};
  }

  a {
    color: ${p => p.theme.colors.link};
    text-decoration: none;
  }

  ::selection {
    background-color: #242424;
  }
`;

export * from './theme';
