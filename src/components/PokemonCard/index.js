import React, { useEffect, useState } from 'react';
import { zeroPad } from '../../utils/zeroPad';
import { Card, TypesList, ElementTag, ImageContainer } from './style'

const PokemonCard = ({ pokemon }) => {
    const [imageSrc, setImageSrc] = useState('');

    const imageDefault = zeroPad(pokemon.pokemon_id, 3);

    useEffect(() => {
        setImageSrc(
            `${imageDefault}${
                pokemon.form !== 'Normal'
                    ? '_' + pokemon.form.toLowerCase()
                    : ''
            }`
        );
    }, [imageDefault, pokemon.form]);

    const useDefaultImage = () => setImageSrc(imageDefault);

    return (
        <Card>
            <ImageContainer>
                <img
                    src={`/images/pokemon/${imageSrc}.png`}
                    alt={pokemon.label}
                    onError={useDefaultImage}
                    />
            </ImageContainer>
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
