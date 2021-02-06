import React from 'react';
import Icon from '../SvgIcon';
import { AttackMoveContainer, Container } from './style';

const EffectivenessStats = ({ attackStats, defenseStats }) => (
    <Container>
        {/* <img src="https://db.pokemongohub.net/images/official/full/007.webp" /> */}
        <div>
            <h3>Attack</h3>
            {attackStats.map((move, i) => (
                <div key={i}>
                    <p>
                        <Icon name={move.type} type='no-label' />
                        {move.name}
                    </p>
                    <AttackMoveContainer color={move.color}>
                        {Object.keys(move.attackStats).map((key, i) => {
                            return (
                                <div key={i}>
                                    {key > 1 && (
                                        <div>
                                            <h4>
                                                Deals {key}x more damage to:
                                            </h4>
                                            {move.attackStats[key].map(
                                                (type) => (
                                                    <p key={type}>{type}</p>
                                                )
                                            )}
                                        </div>
                                    )}
                                    {key < 1 && (
                                        <div>
                                            <h4>
                                                Deals {key}x less damage to:
                                            </h4>
                                            {move.attackStats[key].map(
                                                (type) => (
                                                    <p key={type}>{type}</p>
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

export default EffectivenessStats;
