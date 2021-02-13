import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import EffectivenessStats from '../components/EffectivenessStats';
import pokemonList from '../data/new-pokemon-list.json';
import fastMoves from '../data/fast_moves.json';
import pokemonMoves from '../data/current_pokemon_moves.json';
import typeColors from '../data/type-colors.json';
import getMultipliers from '../multiplier';
import { labelToSlug } from '../utils/slugs';
import { zeroPad } from '../utils/zeroPad';
import PokemonMeta from '../components/PokemonMeta';

const PokemonStats = ({ match }) => {
    const history = useHistory();
    const pokemonSlug = match.params.name;

    const pokemon = pokemonList.filter((poke) => poke.slug === pokemonSlug)[0];

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

    const types = pokemon.type.map((type) => type.toLowerCase());

    const handleSelect = (selected) => {
        history.push(`/pokemon/${labelToSlug(selected.label)}`);
    };

    const terms = {
        attack: ['strong', 'weak'],
        defense: ['vulnerable', 'resistant']
    };

    const formatStats = (stats, type) =>
        Object.entries(stats).reduce((acc, [key, val]) => {
            if (val !== 1) {
                const termsIndex = val > 1 ? 0 : 1;
                const effectivenessKey = terms[type][termsIndex];
                if (!acc[effectivenessKey]) {
                    acc[effectivenessKey] = {};
                }

                if (!acc[effectivenessKey][val]) {
                    acc[effectivenessKey][val] = [key];
                } else {
                    acc[effectivenessKey][val].push(key);
                }
            }

            return acc;
        }, {});

    const { fast_moves } = pokemonMoves.find(
        (moves) =>
            moves.pokemon_id === pokemon.pokemon_id &&
            moves.form === pokemon.form
    );

    const attackMoves = fast_moves.reduce((acc, curr) => {
        const moveStats = fastMoves.find((move) => move.name === curr);
        const attackStats = formatStats(
            getMultipliers([moveStats.type.toLowerCase()]).attack,
            'attack'
        );

        if (!acc[moveStats.type]) {
            acc[moveStats.type] = {
                name: [],
                attackStats,
                color: typeColors[moveStats.type.toLowerCase()]
            };
        }

        acc[moveStats.type].name.push(curr);

        return acc;
    }, {});

    const defenseStats = formatStats(getMultipliers(types).defense, 'defense');

    const useDefaultImage = () => setImageSrc(imageDefault);

    return (
        <>
            <p>Opponent's Pokémon:</p>
            <SearchBar showResults={true} onSelect={handleSelect} />
            <PokemonMeta
                pokemon={pokemon}
                types={types}
                imageSrc={imageSrc}
                useDefaultImage={useDefaultImage}
            />
            <EffectivenessStats
                attackStats={attackMoves}
                defenseStats={defenseStats}
            />
        </>
    );
};

export default PokemonStats;
