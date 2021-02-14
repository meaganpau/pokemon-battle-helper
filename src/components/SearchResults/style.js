import styled from 'styled-components'
import media from '../../theme/breakpoints'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,22%);
    gap: 4%;
    margin-bottom: 100px;

    ${media.md`
        grid-template-columns: repeat(auto-fill, 30%);
        gap: 20px 5%;
    `}

    ${media.sm`
        grid-template-columns: repeat(auto-fill, 48%);
        gap: 20px 2%;
    `}

    ${media.xs`
        grid-template-columns: 1fr;
    `}
`
