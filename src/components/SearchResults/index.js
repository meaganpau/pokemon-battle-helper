import React from 'react';
import PokemonCard from '../PokemonCard';
import { labelToSlug } from '../../utils/slugs';
import { Container } from './style'
import Link from '../Link';

const SearchResults = ({ results }) => (
    <Container>
        {results.map((pokemon) => (
            <Link
                key={pokemon.id}
                to={`/pokemon/${labelToSlug(pokemon.label)}`}
            >
                <PokemonCard pokemon={pokemon} />
            </Link>
        ))}
    </Container>
);

export default SearchResults
