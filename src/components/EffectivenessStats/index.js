import React from 'react';
import { Container } from './style';

const EffectivenessStats = ({ attackStats, defenseStats }) => (
    <Container>
        <div>
            <h3>Attack</h3>
            {Object.keys(attackStats).map((key, i) => {
                return (
                    <div key={i}>
                        {key > 1 && (
                            <div>
                                <h4>Deals {key}x more damage to:</h4>
                                {attackStats[key].map((type) => (
                                    <p key={type}>{type}</p>
                                ))}
                            </div>
                        )}
                        {key < 1 && (
                            <div>
                                <h4>Deals {key}x less damage to:</h4>
                                {attackStats[key].map((type) => (
                                    <p key={type}>{type}</p>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
        <div>
            <h3>Defense</h3>
            {Object.keys(defenseStats)
                .reverse()
                .map((key, i) => {
                    return (
                        <div key={i}>
                            {key > 1 && (
                                <div>
                                    <h4>Takes {key}x more damage from:</h4>
                                    {defenseStats[key].map((type) => (
                                        <p key={type}>{type}</p>
                                    ))}
                                </div>
                            )}
                            {key < 1 && (
                                <div>
                                    <h4>Takes {key}x less damage from:</h4>
                                    {defenseStats[key].map((type) => (
                                        <p key={type}>{type}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
        </div>
    </Container>
);

export default EffectivenessStats
