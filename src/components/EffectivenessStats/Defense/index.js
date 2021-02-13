import React from 'react';
import Icon from '../../SvgIcon';
import { Container, ColoredBackground } from './style';

const Defense = ({ defenseStats }) => {
    console.log(defenseStats);
    return (
        <Container>
            {Object.keys(defenseStats).reverse().map((effectiveness => 
                <ColoredBackground color={effectiveness === 'vulnerable' ? 'green' : 'red'}>
                    {Object.keys(defenseStats[effectiveness]).reverse().map((key, i) =>
                        <div key={i}>
                            <h4>
                                Takes {Math.round(Number(key) * 1000) / 1000}x more damage from:
                            </h4>
                            {Object.values(defenseStats[effectiveness][key]).map((type, i) => (
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
                </ColoredBackground>
            ))}
        </Container>
    );
};

export default Defense;
