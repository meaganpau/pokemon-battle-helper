import React from 'react';
import Icon from '../../SvgIcon';
import { AttackContainer, AttackMoveContainer } from './style';

const Attack = ({ attackStats }) => {
    return (
        <AttackContainer>
            {Object.keys(attackStats).map((move, i) => (
                <div key={i}>
                    <p>
                        <Icon
                            name={move}
                            type='no-label'
                            width={40}
                            height={40}
                        />
                        {attackStats[move].name.join('/')}
                    </p>
                    <AttackMoveContainer color={attackStats[move].color}>
                        {Object.keys(attackStats[move].attackStats).map(
                            (key, i) => {
                                return (
                                    <div key={i}>
                                        {key > 1 && (
                                            <div>
                                                <h4>
                                                    Deals{' '}
                                                    {Math.round(
                                                        Number(key) * 1000
                                                    ) / 1000}
                                                    x more damage to:
                                                </h4>
                                                {attackStats[move].attackStats[
                                                    key
                                                ].map((type, i) => (
                                                    <Icon
                                                        key={i}
                                                        name={type}
                                                        type='label'
                                                        width={80}
                                                        height={80}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                        {key < 1 && (
                                            <div>
                                                <h4>
                                                    Deals{' '}
                                                    {Math.round(
                                                        Number(key) * 1000
                                                    ) / 1000}
                                                    x less damage to:
                                                </h4>
                                                {attackStats[move].attackStats[
                                                    key
                                                ].map((type, i) => (
                                                    <Icon
                                                        key={i}
                                                        name={type}
                                                        type='label'
                                                        width={80}
                                                        height={80}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                );
                            }
                        )}
                    </AttackMoveContainer>
                </div>
            ))}
        </AttackContainer>
    );
};

export default Attack;
