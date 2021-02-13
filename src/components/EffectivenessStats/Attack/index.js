import React from 'react';
import Icon from '../../SvgIcon';
import { Container, IconGrid, EffectContainer, TypeContainer } from '../style';
import { AttackContainer, AttackMoveContainer } from './style';

const Attack = ({ attackStats }) => (
    <Container>
        {Object.keys(attackStats).map((move, i) => (
            <AttackContainer key={i}>
                <h4>
                    <Icon name={move} type='no-label' width={40} />
                    {attackStats[move].name.join('/')}
                </h4>
                <AttackMoveContainer color={attackStats[move].color}>
                    {Object.keys(attackStats[move].attackStats).map(
                        (effectiveness) => (
                            <TypeContainer>
                                <h4>
                                    {effectiveness.charAt(0).toUpperCase() +
                                        effectiveness.slice(1)}{' '}
                                    Against:
                                </h4>
                                {Object.keys(
                                    attackStats[move].attackStats[effectiveness]
                                )
                                    .reverse()
                                    .map((key, i) => (
                                        <EffectContainer key={i}>
                                            <h5>
                                                Deals{' '}
                                                {Math.round(
                                                    Number(key) * 1000
                                                ) / 1000}
                                                x more damage to:
                                            </h5>
                                            <IconGrid>
                                                {Object.values(
                                                    attackStats[move]
                                                        .attackStats[
                                                        effectiveness
                                                    ][key]
                                                ).map((type, i) => (
                                                    <Icon
                                                        key={i}
                                                        name={type}
                                                        type='label'
                                                    />
                                                ))}
                                            </IconGrid>
                                        </EffectContainer>
                                    ))}
                            </TypeContainer>
                        )
                    )}
                </AttackMoveContainer>
            </AttackContainer>
        ))}
    </Container>
);

export default Attack;
