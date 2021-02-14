import styled from 'styled-components'

export const ColoredBackground = styled.div`
    background: ${props => props.theme.global.color[props.color]};
    border-radius: 15px;
    padding: 30px;
    height: fit-content;
`
