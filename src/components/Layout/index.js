import React from 'react'
import Header from '../Header'

const Layout = ({ children, theme, toggleTheme }) => {
    return (
        <div>
            <Header theme={theme} toggleTheme={toggleTheme} />
            { children }
        </div>
    )
}

export default Layout