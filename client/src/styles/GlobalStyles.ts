import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
    width: 100%;
    height: 100%;
  }

  body,
  html,
  #root {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  button {
    border: none;
    outline: none;
  }
`;

export default GlobalStyles;
