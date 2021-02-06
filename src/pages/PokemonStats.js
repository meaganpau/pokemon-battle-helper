import React from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import EffectivenessStats from '../components/EffectivenessStats';
import pokemonList from '../data/new-pokemon-list.json';
import fastMoves from '../data/fast_moves.json';
import pokemonMoves from '../data/current_pokemon_moves.json';
import typeColors from '../data/type-colors.json';
import getMultipliers from '../multiplier';
import { labelToSlug, slugToLabel } from '../utils/slugs';
import Icon from '../components/SvgIcon';

const PokemonStats = ({ match }) => {
    const history = useHistory();
    const pokemonSlug = match.params.name;
    const pokemonLabel = pokemonSlug.includes('-')
        ? slugToLabel(pokemonSlug)
        : pokemonSlug;
    const pokemon = pokemonList.filter(
        (poke) => poke.label.toLowerCase() === pokemonLabel
    )[0];
    const types = pokemon.type.map((type) => type.toLowerCase());

    const multipliers = getMultipliers(types);

    const handleSelect = (selected) => {
        history.push(`/pokemon/${labelToSlug(selected.label)}`);
    };

    const calculateAttackStats = (stats) =>
        Object.entries(stats).reduce((acc, [key, val]) => {
            if (!acc[val]) {
                acc[val] = [key];
            } else {
                acc[val].push(key);
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
        const attackStats = calculateAttackStats(
            getMultipliers([moveStats.type.toLowerCase()]).attack
        );

        if (!acc[moveStats.type]) {
            acc[moveStats.type] = {
                name: [],
                attackStats,
                color: typeColors[moveStats.type.toLowerCase()]
            };
        }

        acc[moveStats.type].name.push(curr)

        return acc;
    }, {});

    const defenseStats = calculateAttackStats(multipliers.defense);

    return (
        <div>
            <SearchBar showResults={true} onSelect={handleSelect} />
            <h2>
                {pokemon.label} <span>#{pokemon.pokemon_id}</span>
            </h2>
            <h3>Types</h3>
            {types.map((type, i) => (
                <Icon name={type} type="tag" />
            ))}
            <EffectivenessStats
                attackStats={attackMoves}
                defenseStats={defenseStats}
            />
        </div>
    );
};

export default PokemonStats;
