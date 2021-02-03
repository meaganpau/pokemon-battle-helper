import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { labelToSlug } from '../utils/slugs';

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
                searchResults.map((pokemon) => {
                    const link = `/pokemon/${labelToSlug(pokemon.label)}`
                    return (
                        <Link
                            key={pokemon.id}
                            to={link}
                        >
                            <p>{pokemon.label}</p>
                            <ul>
                                {pokemon.type.map((type, i) => (
                                    <li key={i}>{type}</li>
                                ))}
                            </ul>
                        </Link>
                    );
                })
            ) : (
                <p>{searchText}</p>
            )}
        </>
    );
};

export default Home;
