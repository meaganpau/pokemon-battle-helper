import React from 'react';
import uppercaseFirstChar from '../../../utils/uppercaseFirstChar';
import Icon from '../../SvgIcon';
import { Container, IconGrid, EffectContainer } from '../style';
import { ColoredBackground } from './style';

const TypeComparison = ({ stats, type }) => { 
    const statKeys = Object.keys(stats)
    if (type === 'defense') {
        statKeys.reverse()
    }
    return (
    <Container>
        {statKeys
            .map((effectiveness) => (
                <ColoredBackground
                    color={effectiveness === 'vulnerable' || effectiveness === 'weak' ? 'green' : 'red'}
                >
                    <h4>{uppercaseFirstChar(effectiveness)} {type === 'defense' ? 'To' : 'Against'}:</h4>
                    {Object.keys(stats[effectiveness])
                        .reverse()
                        .map((key, i) => (
                            <EffectContainer key={i}>
                                <h5>
                                    {type === 'defense' ? 'Takes' : 'Deals'}{' '}
                                    {Math.round(Number(key) * 1000) / 1000}x
                                    more damage {type === 'defense' ? 'from' : 'to'}:
                                </h5>
                                <IconGrid>
                                    {Object.values(
                                        stats[effectiveness][key]
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
)}

export default TypeComparison;
