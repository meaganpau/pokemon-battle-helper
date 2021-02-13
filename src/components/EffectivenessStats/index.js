import React from 'react';
import AttackMoves from './AttackMoves';
import TypeComparison from './TypeComparison';
import { StatContainer } from './style';

const EffectivenessStats = ({ attackStats, defenseStats }) => (
    <>
        <StatContainer>
            <h3>Defense</h3>
            <TypeComparison stats={defenseStats} type="defense" />
        </StatContainer>
        <StatContainer>
            <h3>Attack Moves</h3>
            <AttackMoves attackStats={attackStats} type="attack" />
        </StatContainer>
    </>
);

export default EffectivenessStats;
