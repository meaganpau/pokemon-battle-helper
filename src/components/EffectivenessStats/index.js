import React from 'react';
import Attack from './Attack';
import Defense from './Defense';
import { StatContainer } from './style';

const EffectivenessStats = ({ attackStats, defenseStats }) => (
    <>
        <StatContainer>
            <h3>Defense</h3>
            <Defense defenseStats={defenseStats} />
        </StatContainer>
        <StatContainer>
            <h3>Attack Moves</h3>
            <Attack attackStats={attackStats} />
        </StatContainer>
    </>
);

export default EffectivenessStats;
