import styled from 'styled-components'
import Icon from '../SvgIcon';

export const Card = styled.div`
    background: ${props => props.theme.color.background.content};
    box-shadow: 0px 2.97px 29.7px 2.97px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
`

export const TypesList = styled.ul`
    padding: 0;
`

export const ElementTag = styled(Icon)`
    max-width: 120px;
    height: auto;

    & + & {
        margin-left: 5px;
    }
`