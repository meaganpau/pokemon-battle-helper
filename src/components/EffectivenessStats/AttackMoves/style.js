import styled from 'styled-components'

export const AttackContainer = styled.div`
    h4 {
        display: flex;
        align-items: center;
        font-weight: 700;

        svg {
            margin-right: 10px;
        }
    }
`

export const AttackMoveContainer = styled.div`
    border-left: 8px solid ${props => props.color}33;
    padding: 5px 0 5px 25px;
    margin-left: 16px;
`
