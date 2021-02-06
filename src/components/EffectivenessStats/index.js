import React from 'react';
import Icon from '../SvgIcon';
import { AttackMoveContainer, Container } from './style';

const EffectivenessStats = ({ attackStats, defenseStats }) => (
    <Container>
        <div>
            <h3>Attack Types</h3>
            {Object.keys(attackStats).map((move, i) => (
                <div key={i}>
                    <p>
                        <Icon name={move} type='no-label' width={40} height={40} />
                        {attackStats[move].name.join('/')}
                    </p>
                    <AttackMoveContainer color={attackStats[move].color}>
                        {Object.keys(attackStats[move].attackStats).map((key, i) => {
                            return (
                                <div key={i}>
                                    {key > 1 && (
                                        <div>
                                            <h4>
                                                Deals {key}x more damage to:
                                            </h4>
                                            {attackStats[move].attackStats[key].map(
                                                (type) => (
                                                    <Icon name={type} type="label" width={80} height={80} />
                                                )
                                            )}
                                        </div>
                                    )}
                                    {key < 1 && (
                                        <div>
                                            <h4>
                                                Deals {key}x less damage to:
                                            </h4>
                                            {attackStats[move].attackStats[key].map(
                                                (type) => (
                                                    <Icon name={type} type="label" width={80} height={80} />
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </AttackMoveContainer>
                </div>
            ))}
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
                                        <Icon name={type} type="label" width={80} height={80} />
                                    ))}
                                </div>
                            )}
                            {key < 1 && (
                                <div>
                                    <h4>Takes {key}x less damage from:</h4>
                                    {defenseStats[key].map((type) => (
                                        <Icon name={type} type="label" width={80} height={80} />
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
        </div>
    </Container>
);

export default EffectivenessStats;
