import styled from 'styled-components'

export const ColoredBackground = styled.div`
    background: ${props => props.theme.global.color[props.color]};
    border-radius: 15px;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`
