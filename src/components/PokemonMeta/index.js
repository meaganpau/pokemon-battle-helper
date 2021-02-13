import React from 'react';
import Icon from '../SvgIcon';
import { Container, ImageContainer, MetaDetails, Title } from './style';

const PokemonMeta = ({ pokemon, types, imageSrc, useDefaultImage}) => (
    <Container>
        <ImageContainer>
            <img
                src={`/images/pokemon/${imageSrc}.png`}
                alt={pokemon.label}
                onError={useDefaultImage}
            />
        </ImageContainer>
        <MetaDetails>
            <Title>
                <h2>{pokemon.label}</h2>
                <span>#{pokemon.pokemon_id}</span>
            </Title>
            {types.map((type, i) => (
                <Icon key={i} name={type} type='tag' />
            ))}
        </MetaDetails>
    </Container>
);

export default PokemonMeta;
