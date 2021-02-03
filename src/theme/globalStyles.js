import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text.dark};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.5s linear;
    margin: 0;
  }


    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    h1 {
        font-family: 'Karla', sans-serif;
        color: ${({ theme }) => theme.color.dark};
    }

`;

export default GlobalStyles