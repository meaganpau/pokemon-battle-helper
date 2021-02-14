import styled from 'styled-components'
import { ReactComponent as Pokeball } from '../../images/Pokeball.svg'
import media from '../../theme/breakpoints'

export const Container = styled.div`
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;

    ${media.sm`
        padding-left: 20px;
        padding-right: 20px;
    `}
`

export const ContentContainer = styled.div`
    max-width: 1088px;
    box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    margin: 40px auto 0;
    padding: 60px 100px;
    background: ${props => props.theme.color.background.content};

    ${media.md`
        padding: 30px;
        margin: 20px auto 0;
    `}
`

export const BackgroundImage = styled(Pokeball)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: ${props => props.theme.color.pokeball.opacity};
`
