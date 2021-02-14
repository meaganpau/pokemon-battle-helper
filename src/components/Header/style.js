import styled from 'styled-components'
import media from '../../theme/breakpoints'

export const StyledHeader = styled.header`
    text-align: right;

    h1 {
        text-align: left;
    }

    img {
        margin-right: 15px;

        ${media.sm`
            max-width: 60px;
        `}
    }
`
