import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import EffectivenessStats from '../components/EffectivenessStats';
import pokemonList from '../data/new-pokemon-list.json';
import fastMoves from '../data/fast_moves.json';
import pokemonMoves from '../data/current_pokemon_moves.json';
import typeColors from '../data/type-colors.json';
import getMultipliers from '../multiplier';
import { labelToSlug } from '../utils/slugs';
import Icon from '../components/SvgIcon';
import { zeroPad } from '../utils/zeroPad'

const PokemonStats = ({ match }) => {
    const history = useHistory();
    const pokemonSlug = match.params.name;
    
    const pokemon = pokemonList.filter(
        (poke) => poke.slug === pokemonSlug
    )[0];

    const [imageSrc, setImageSrc] = useState('')

    const imageDefault = zeroPad(pokemon.pokemon_id, 3)

    useEffect(() => {
        setImageSrc(`${imageDefault}${pokemon.form !== 'Normal' ? '_' + pokemon.form.toLowerCase() : ''}`)
    }, [imageDefault, pokemon.form])

    const types = pokemon.type.map((type) => type.toLowerCase());

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

    const defenseStats = calculateAttackStats(getMultipliers(types).defense)

    const defenseStatsFormatted = Object.keys(defenseStats).reduce((acc, curr) => {
        const key = Number(curr) > 1 ? 'vulnerable' : 'resistant'

        if (!acc[key]) {
            acc[key] = {}
        }

        acc[key][curr] = defenseStats[curr]

        return acc
    }, {});
    

    const useDefaultImage = () => setImageSrc(imageDefault)

    return (
        <div>
            <SearchBar showResults={true} onSelect={handleSelect} />
            <h2>
                {pokemon.label} <span>#{pokemon.pokemon_id}</span>
            </h2>
            <img src={`/images/pokemon/${imageSrc}.png`} alt={pokemon.label} onError={useDefaultImage}/>
            {types.map((type, i) => (
                <Icon key={i} name={type} type="tag" />
            ))}
            <EffectivenessStats
                attackStats={attackMoves}
                defenseStats={defenseStatsFormatted}
            />
        </div>
    );
};

export default PokemonStats;
