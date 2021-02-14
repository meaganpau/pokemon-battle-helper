import React, { useState } from 'react';
import DefaultOptionTypes from '../components/DefaultOptionTypes';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const Home = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [showDefaultOptions, setShowDefaultOptions] = useState(true);

    const handleOnSearch = (string, results) => {
        setShowDefaultOptions(false);
        setSearchResults(results);
    };

    const handleOnClear = () => {
        setShowDefaultOptions(true);
        setSearchResults([]);
    };

    return (
        <>
            <h2>Opponent’s Pokémon</h2>
            <SearchBar
                onClear={handleOnClear}
                onSearch={handleOnSearch}
                showResults={false}
            />
            {searchResults.length > 0 && <SearchResults results={searchResults} />}
            {searchResults.length === 0 && !showDefaultOptions && <p>No results found :(</p>}
            {showDefaultOptions && <DefaultOptionTypes />}
        </>
    );
};

export default Home;
