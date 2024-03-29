import React, { useCallback, useEffect, useState } from 'react';
import { useEffectSkipFirstRender } from './useEffectSkipFirstRender';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import { defaultTheme, defaultFuseOptions } from './config';
import Results from './Results';
import SearchInput from './SearchInput';
// import { ThemeProvider } from 'styled-components';
import { debounce } from './utils';
import styled from 'styled-components';

export const DEFAULT_INPUT_DEBOUNCE = 200;
export const MAX_RESULTS = 10;

export default function ReactSearchAutocomplete(props) {
    const {
        items,
        fuseOptions,
        inputDebounce,
        onClear,
        onSearch,
        onSelect,
        onFocus,
        showIcon,
        maxResults,
        placeholder,
        autoFocus,
        styling,
        resultStringKeyName,
        showResults
    } = props;

    // const theme = { ...defaultTheme, ...styling };
    const options = { ...defaultFuseOptions, ...fuseOptions };

    const fuse = new Fuse(items, options);
    fuse.setCollection(items);

    const [searchString, setSearchString] = useState('');
    const [displayString, setDisplayString] = useState('');
    const [results, setResults] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const [displayResults, setDisplayResults] = useState(false);
    const [selectIndex, setSelectIndex] = useState(-1);

    const onEscape = useCallback((e) => {
        if (e.keyCode === 27) {
            setSearchString('');
            setDisplayString('');
        }
    }, []);

    useEffect(() => {
        if (isFocused && !displayResults) {
            window.addEventListener('keydown', onEscape);
        } else {
            window.removeEventListener('keydown', onEscape);
        }
        return () => {
            window.removeEventListener('keydown', onEscape);
        };
    }, [isFocused, displayResults, onEscape]);

    useEffect(() => {
        setDisplayResults(showResults);
    }, [showResults]);

    const onKeyDown = useCallback(
        (e) => {
            switch (e.keyCode) {
                case 40: // down arrow
                    e.preventDefault();
                    if (selectIndex < results.length - 1) {
                        setSelectIndex(selectIndex + 1);
                    }
                    setDisplayResults(showResults ? true : showResults);
                    break;

                case 38: // up arrow
                    e.preventDefault();
                    if (selectIndex > 0) {
                        setSelectIndex(selectIndex - 1);
                    }
                    break;

                case 27: // esc
                    setDisplayResults(false);
                    break;

                case 13: // enter
                    if (results[selectIndex]) {
                        onSelect(results[selectIndex]);
                        setDisplayResults(false);
                        setSearchString('');
                        setDisplayString('');
                    }
                    break;

                default:
                    setDisplayResults(showResults ? true : showResults);
                    break;
            }
        },
        [onSelect, results, selectIndex, showResults]
    );

    useEffect(() => {
        if (isFocused && displayResults) {
            window.addEventListener('keydown', onKeyDown);
        } else {
            window.removeEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [displayResults, isFocused, onKeyDown]);

    useEffectSkipFirstRender(() => {
        let newResults = [];

        if (searchString.length > 0) {
            newResults = fuseResults(searchString);
            setResults(newResults);
            onSearch(searchString, newResults);
        } else {
            onClear();
            setResults(newResults);
        }
        setDisplayResults(showResults ? true : showResults);
        setSelectIndex(-1);
        setDisplayString(searchString);
    }, [searchString]);

    const fuseResults = (keyword) =>
        fuse
            .search(keyword, { limit: maxResults })
            .map((result) => ({ ...result.item }))
            .slice(0, maxResults);

    const handleOnSearch = useCallback(
        inputDebounce > 0
            ? debounce((keyword) => {
                  setSearchString(keyword);
              }, inputDebounce)
            : (keyword) => {
                  setSearchString(keyword);
              },
        [items]
    );

    const handleSetSearchString = ({ target }) => {
        setDisplayString(target.value);
        handleOnSearch(target.value);
    };

    const handleFocus = (e) => {
        setIsFocused(true);
        onFocus();
    };

    const handleBlur = () => {
        setIsFocused(false);
        setResults([]);
    };

    const handleClick = () => {
        onSelect(results[selectIndex])
        setDisplayResults(false);
        setSearchString('');
        setDisplayString('');
    }

    return (
        // <ThemeProvider theme={theme}>
            <StyledReactSearchAutocomplete>
                <div className='wrapper'>
                    <SearchInput
                        searchString={displayString}
                        setSearchString={handleSetSearchString}
                        autoFocus={autoFocus}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        placeholder={placeholder}
                        showIcon={showIcon}
                    />
                    {displayResults && (
                        <Results
                            highlighted={selectIndex > -1 ? selectIndex : null}
                            results={results}
                            onClick={handleClick}
                            setDisplayString={setDisplayString}
                            showIcon={showIcon}
                            maxResults={maxResults}
                            resultStringKeyName={resultStringKeyName}
                            setSelectIndex={setSelectIndex}
                        />
                    )}
                </div>
            </StyledReactSearchAutocomplete>
        // </ThemeProvider>
    );
}

ReactSearchAutocomplete.defaultProps = {
    items: [],
    fuseOptions: defaultFuseOptions,
    onSearch: () => {},
    onSelect: () => {},
    onClear: () => {},
    inputDebounce: DEFAULT_INPUT_DEBOUNCE,
    showIcon: true,
    maxResults: MAX_RESULTS,
    placeholder: '',
    autoFocus: false,
    onFocus: () => {},
    styling: {},
    resultStringKeyName: 'name',
    showResults: false
};

ReactSearchAutocomplete.propTypes = {
    items: PropTypes.array,
    fuseOptions: PropTypes.object,
    inputDebounce: PropTypes.number,
    onSearch: PropTypes.func,
    onSelect: PropTypes.func,
    onFocus: PropTypes.func,
    onClear: PropTypes.func,
    showIcon: PropTypes.bool,
    maxResults: PropTypes.number,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    styling: PropTypes.object,
    resultStringKeyName: PropTypes.string,
    showResults: PropTypes.bool
};

const StyledReactSearchAutocomplete = styled.div`
    position: relative;
    margin-bottom: 30px;
    height: 46px;

    > .wrapper {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 100%;
        box-shadow: 0px 4px 40px 4px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        background-color: ${(props) => props.theme.color.background.main};
    }
`;
