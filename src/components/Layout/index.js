import React from 'react'
import { BackgroundImage, Container, ContentContainer } from './style'
import Header from '../Header'

const Layout = ({ children, theme, toggleTheme }) => {
    return (
        <Container>
            <BackgroundImage />
            <Header theme={theme} toggleTheme={toggleTheme} />
            <ContentContainer>
                { children }
            </ContentContainer>
        </Container>
    )
}

export default Layout