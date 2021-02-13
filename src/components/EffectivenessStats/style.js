import styled from 'styled-components'

export const StatContainer = styled.div`
    & + & {
        margin-top: 50px;
    }
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
`

export const IconGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 65px);
    grid-gap: 10px;
`

export const EffectContainer = styled.div`
    h5 {
        margin-bottom: 10px;
    }

    & + & {
        margin-top: 20px;
    }
`

export const TypeContainer = styled.div`
    box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    padding: 30px;

    & + & {
        margin-top: 30px;
    }
`
