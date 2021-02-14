import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    background: ${({ theme }) => theme.color.background.main};
    border: 2px solid ${({ theme }) => theme.color.placeholder};
    color: ${({ theme }) => theme.color.text.dark};
    border-radius: 30px;
    cursor: pointer;
    font-size:0.8rem;
    padding: 0.6rem;
    margin-top: 10px;
`;

const Toggle = ({ theme, toggleTheme }) => {
    return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
};
export default Toggle;
