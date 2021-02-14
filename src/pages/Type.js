import React from 'react';
import styled from 'styled-components'
import BackButton from '../components/BackButton';
import TypeComparison from '../components/EffectivenessStats/TypeComparison';
import Icon from '../components/SvgIcon';
import formatStats from '../utils/formatStats';
import getMultipliers from '../utils/multiplier';
import uppercaseFirstChar from '../utils/uppercaseFirstChar';

const Title = styled.h2`
    display: flex;
    align-items: center;

    svg { 
        margin-left: 10px;
    }
`

const Type = ({ match }) => {
    const type = match.params.type;    
    const defenseStats = formatStats(getMultipliers([type]).defense, 'defense');
    const attackStats = formatStats(getMultipliers([type]).attack, 'attack');

    return (
        <>
            <BackButton />
            <Title>{uppercaseFirstChar(type)}<Icon name={type} type="no-label" width={38} /></Title>
            <h3>Defense</h3>
            <TypeComparison stats={defenseStats} type="defense" />
            <h3>Attack</h3>
            <TypeComparison stats={attackStats} type="attack" />
        </>
    );
};

export default Type;
