import { createGlobalStyle, css } from "styled-components";

export const reset = css`
  * {
    margin: 0;
    padding: 0;

    font-size: 62.5%;
    color: inherit;
    vertical-align: baseline;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  :root {
    overflow-x: hidden;
    overflow-y: scroll;

    width: 100%;

    line-height: 1.5;
    text-size-adjust: 100%;
    text-size-adjust: 100%;
    word-break: break-word;
    overflow-wrap: break-word;
    tab-size: 4;

    -webkit-tap-highlight-color: transparent;
  }
  html,
  body {
    touch-action: none;

    height: 100%;

    font-smooth: never;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  button {
    cursor: pointer;
    background: none;
    border: 0;
  }
  a {
    text-decoration: none;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
`;

export const GlobalStyle = createGlobalStyle`
${reset}

`;

export default GlobalStyle;
