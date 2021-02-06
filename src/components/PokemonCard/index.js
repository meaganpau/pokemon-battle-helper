import React from 'react';
import { Card, TypesList, ElementTag } from './style'

const PokemonCard = ({ pokemon }) => {
    return (
        <Card>
            <span>#{pokemon.pokemon_id}</span>
            <h3>{pokemon.label}</h3>
            <TypesList>
                {pokemon.type.map((type, i) => (
                    <ElementTag name={type} type="tag" key={i} />
                ))}
            </TypesList>
        </Card>
    );
};

export default PokemonCard;
