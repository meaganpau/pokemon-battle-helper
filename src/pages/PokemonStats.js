import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import EffectivenessStats from '../components/EffectivenessStats';
import pokemonList from '../data/new-pokemon-list.json';
import getMultipliers from '../multiplier';
import { labelToSlug, slugToLabel } from '../utils/slugs';

const PokemonStats = ({ match }) => {
    const history = useHistory();
    const pokemonSlug = match.params.name;
    const pokemonLabel = pokemonSlug.includes('-')
        ? slugToLabel(pokemonSlug)
        : pokemonSlug;
    const pokemon = pokemonList.filter(
        (poke) => poke.label.toLowerCase() === pokemonLabel
    );
    const types = pokemon[0].type.map((type) => type.toLowerCase());

    const multipliers = getMultipliers(types);

    const handleSelect = (selected) => {
        history.push(`/pokemon/${labelToSlug(selected.label)}`);
    };

    const attackStats = Object.entries(multipliers.attack).reduce(
        (acc, [key, val]) => {
            if (!acc[val]) {
                acc[val] = [key];
            } else {
                acc[val].push(key);
            }
            return acc;
        },
        {}
    );

    const defenseStats = Object.entries(multipliers.defense).reduce(
        (acc, [key, val]) => {
            if (!acc[val]) {
                acc[val] = [key];
            } else {
                acc[val].push(key);
            }
            return acc;
        },
        {}
    );

    return (
        <div>
            <SearchBar showResults={true} onSelect={handleSelect} />
            <h2>
                {pokemon[0].label} <span>#{pokemon[0].pokemon_id}</span>
            </h2>
            <h3>Types</h3>
            {types.map((type, i) => (
                <p key={i}>{type}</p>
            ))}
            <EffectivenessStats attackStats={attackStats} defenseStats={defenseStats} />
        </div>
    );
};

export default PokemonStats;
