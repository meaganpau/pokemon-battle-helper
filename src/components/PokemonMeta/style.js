import styled from 'styled-components'

export const Container = styled.div`
    margin-bottom: 40px;
    display: flex;
`

export const ImageContainer = styled.div`
    background: ${props => props.theme.color.background.pokemon};
    border-radius: 10px;
    padding: 25px;
    max-width: 250px;
    max-height: 250px;
    margin-right: 50px;

    img {
        max-width: 100%;
    }
`

export const MetaDetails = styled.div`
    svg + svg {
        margin-left: 10px;
    }
`


export const Title = styled.div`
    display: flex;
    align-items: baseline;
    margin-bottom: 20px;

    h2 {
        margin: 0 20px 0 0;
    }
    
    span {
        font-style: italic;
        color: ${props => props.theme.color.text.placeholder};
        font-size: 18px;
    }
`
