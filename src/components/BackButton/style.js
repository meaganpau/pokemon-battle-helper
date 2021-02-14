import styled from 'styled-components'
import media from '../../theme/breakpoints'
import Link from '../Link'

export const StyledLink = styled(Link)`
    position: relative;
    top: -20px;
    left: -50px;
    display: inline-block;

    ${media.md`
        top: -10px;
        left: -15px;
        margin-bottom: 10px;
    `}
`
