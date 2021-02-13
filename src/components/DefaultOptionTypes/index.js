import React from 'react';
import types from '../../data/type-effectiveness2.json';
import Link from '../Link';
import Icon from '../SvgIcon';
import { Container } from './style';

const DefaultOptionTypes = () => {
    return (
        <Container>
            {Object.keys(types).map((type) => (
                <Link to={`/type/${type}`}>
                    <Icon name={type} type='label' />
                </Link>
            ))}
        </Container>
    );
};

export default DefaultOptionTypes;
