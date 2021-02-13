import React from 'react';
import { Link } from 'react-router-dom';
import TypeComparison from '../components/EffectivenessStats/TypeComparison';
import Icon from '../components/SvgIcon';
import formatStats from '../utils/formatStats';
import getMultipliers from '../utils/multiplier';
import uppercaseFirstChar from '../utils/uppercaseFirstChar';

const Type = ({ match }) => {
    const type = match.params.type;    
    const defenseStats = formatStats(getMultipliers([type]).defense, 'defense');
    const attackStats = formatStats(getMultipliers([type]).attack, 'attack');

    return (
        <>
            <Link to="/">Back</Link>
            <h2><Icon name={type} type="no-label" />{uppercaseFirstChar(type)}</h2>
            <h3>Defense</h3>
            <TypeComparison stats={defenseStats} type="defense" />
            <h3>Attack</h3>
            <TypeComparison stats={attackStats} type="attack" />
        </>
    );
};

export default Type;
