import React from 'react';
import Attack from './Attack';
import Defense from './Defense';

const EffectivenessStats = ({ attackStats, defenseStats }) => (
    <>
        <h3>Defense</h3>
        <Defense defenseStats={defenseStats} />
        <h3>Attack Moves</h3>
        <Attack attackStats={attackStats} />
    </>
);

export default EffectivenessStats;
