import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults'

const Home = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleOnSearch = (string, results) => {
        setSearchText('No results found :(');
        setSearchResults(results);
    };

    const handleOnClear = () => {
        setSearchText('');
        setSearchResults([]);
    };

    return (
        <>
            <SearchBar
                onClear={handleOnClear}
                onSearch={handleOnSearch}
                showResults={false}
            />
            {searchResults.length ? (
                <SearchResults results={searchResults} />
            ) : (
                <p>{searchText}</p>
            )}
        </>
    );
};

export default Home;
