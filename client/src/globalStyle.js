import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    height: 100%;
    width: 100%;
  }
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  h1,
  p,
  a,
  label {
    margin: 0;
    line-height: 1.5em;
    color: #989898;
  }

  a {
    font-size: 24px;
    text-decoration: none;
    padding: 5px;
  }
`;

export default GlobalStyle;