import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
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

    return (
        <div>
            <SearchBar showResults={true} onSelect={handleSelect} />
            <h1>{pokemon[0].label} <span>#{pokemon[0].pokemon_id}</span></h1>
            <h3>Types</h3>
            {types.map((type, i) => (
                <p key={i}>{type}</p>
            ))}
            <h3>Attack</h3>
            {Object.keys(multipliers.attack).map((type, i) => (
                <div key={i}>
                    {type}: {multipliers.attack[type]}
                </div>
            ))}
            <h3>Defense</h3>
            {Object.keys(multipliers.defense).map((type, i) => (
                <div key={i}>
                    {type}: {multipliers.defense[type]}
                </div>
            ))}
        </div>
    );
};

export default PokemonStats;
