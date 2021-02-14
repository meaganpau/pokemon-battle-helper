import styled from 'styled-components'
import media from '../../theme/breakpoints'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 50px 30px;
    margin: 100px auto 60px;
    max-width: 80%;
    text-align: center;

    ${media.sm`
        grid-template-columns: repeat(4, 1fr);
        max-width: 100%;
        grid-gap: 30px 10px;
        margin: 80px auto;
    `}

    ${media.xs`
        grid-template-columns: repeat(3, 1fr);
        margin: 60px auto;
    `}
`
