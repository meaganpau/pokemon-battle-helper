import React from 'react';
import Icon from '../../SvgIcon';
import { Container, IconGrid, EffectContainer } from '../style';
import { ColoredBackground } from './style';

const Defense = ({ defenseStats }) => (
    <Container>
        {Object.keys(defenseStats)
            .reverse()
            .map((effectiveness) => (
                <ColoredBackground
                    color={effectiveness === 'vulnerable' ? 'green' : 'red'}
                >
                    <h4>{effectiveness.charAt(0).toUpperCase() + effectiveness.slice(1)} To:</h4>
                    {Object.keys(defenseStats[effectiveness])
                        .reverse()
                        .map((key, i) => (
                            <EffectContainer key={i}>
                                <h5>
                                    Takes{' '}
                                    {Math.round(Number(key) * 1000) / 1000}x
                                    more damage from:
                                </h5>
                                <IconGrid>
                                    {Object.values(
                                        defenseStats[effectiveness][key]
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
                </ColoredBackground>
            ))}
    </Container>
);

export default Defense;
