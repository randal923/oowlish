import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-weight: 400;
    line-height: 22px;
    font-size: 1.4rem;
    color: var(--textColor); 
    font-family: -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased !important;
    background-color: var(--backgroundColor);
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  :root {
    --backgroundColor: #171e26;
    --textColor: white;
    --button__border-color: #26313d;
    --button__background-color: #1e2731;
    --button__box-shadow--color: rgba(0, 0, 0, 0.1);
    --button__hover-color: rgb(89, 175, 127);
  }
`

export default GlobalStyle
