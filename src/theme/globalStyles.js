import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.color.background.main};
        color: ${({ theme }) => theme.color.text.dark};
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: all 0.3s ease;
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 10px 0;
    }

    h1 {
        font-family: 'Karla', sans-serif;
        color: ${({ theme }) => theme.color.dark};
        font-size: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        margin: 5px 0;
    }
`;

export default GlobalStyles