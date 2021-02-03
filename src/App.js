import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import Layout from './components/Layout';
import useDarkMode from './hooks/useDarkMode';
import GlobalStyles from './theme/globalStyles';
import { lightTheme, darkTheme } from './theme';

function App() {
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Layout theme={theme} toggleTheme={themeToggler}>
                <Router />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
