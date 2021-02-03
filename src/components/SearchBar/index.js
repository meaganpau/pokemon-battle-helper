import React from 'react';
import ReactSearchAutocomplete from '../ReactSearchAutocomplete';
import pokemonList from '../../data/new-pokemon-list.json';

const SearchBar = ({ placeholder, onClear, onSearch, showResults, onSelect, autofocus }) => {
    return (
        <ReactSearchAutocomplete
            items={pokemonList}
            onClear={onClear}
            onSearch={onSearch}
            autoFocus={autofocus || false}
            fuseOptions={{ keys: ['label', 'pokemon_id'] }}
            resultStringKeyName='label'
            placeholder={placeholder || 'Search for a Pokémon'}
            showResults={showResults}
            onSelect={onSelect}
        />
    );
};

export default SearchBar
