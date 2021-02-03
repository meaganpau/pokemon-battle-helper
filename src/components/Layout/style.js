import styled from 'styled-components'
import { ReactComponent as Pokeball } from '../../images/Pokeball.svg'

export const Container = styled.div`
    padding-left: 40px;
    padding-right: 40px;
`

export const ContentContainer = styled.div`
    max-width: 1088px;
    box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    margin: 0 auto;
    padding: 60px 100px;
    background: ${props => props.theme.color.background.content};
`

export const BackgroundImage = styled(Pokeball)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`
