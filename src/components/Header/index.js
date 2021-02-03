import React from 'react'
import ThemeToggle from '../ThemeToggle';
import { StyledHeader } from './style'

const Header = ({ theme, toggleTheme}) => {   
    return (
        <StyledHeader>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <h1>
                <img src='/images/image.svg' alt='' />
                Pokémon Battle Helper
            </h1>
        </StyledHeader>
    )
}

export default Header
