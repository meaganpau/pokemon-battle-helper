import React from 'react'
import PropTypes from 'prop-types'
import { SearchIcon } from './SearchIcon'
import styled from 'styled-components'

export default function Results(props) {
  const { results, onClick, setDisplayString, showIcon, maxResults, resultStringKeyName, highlighted, setSelectIndex } = props

  const handleClick = (result) => {
    onClick(result)
    setDisplayString(result[resultStringKeyName])
  }

  if (results.length <= 0) {
    return null
  }

  return (
    <StyledResults>
      <div className="line" />
      <ul>
        {results.slice(0, maxResults).map((result, i) => {
          return (
            <ListItem
              key={`rsa-result-${result.id}`}
              onMouseDown={() => handleClick(result)}
              onClick={() => handleClick(result)}
              highlighted={i === highlighted}
              onMouseEnter={() => setSelectIndex(i)}
            >
              {showIcon && (
                <div className="icon">
                  <SearchIcon />
                </div>
              )}
              <div className="ellipsis" title={result[resultStringKeyName]}>
                {result[resultStringKeyName]}
              </div>
            </ListItem>
          )
        })}
      </ul>
    </StyledResults>
  )
}

Results.defaultProps = {
  results: [],
  setDisplayString: () => {},
  resultStringKeyName: 'name'
}

Results.propTypes = {
  results: PropTypes.array,
  onClick: PropTypes.func,
  setSearchString: PropTypes.func,
  showIcon: PropTypes.bool,
  maxResults: PropTypes.number,
  resultStringKeyName: PropTypes.string,
  highlighted: PropTypes.number
}

const ListItem = styled.li`
  background: ${props => props.highlighted ? props.theme.hoverBackgroundColor : 'inherit'};
`

const StyledResults = styled.div`
  > div.line {
    border-top-color: ${(props) => props.theme.lineColor};
    border-top-style: solid;
    border-top-width: 1px;

    margin-bottom: 0px;
    margin-left: 14px;
    margin-right: 20px;
    margin-top: 0px;

    padding-bottom: 4px;
  }

  > ul {
    list-style-type: none;
    margin: 0;
    padding: 0px 0 16px 0;
    max-height: ${(props) => props.theme.maxHeight};

    > li {
      display: flex;
      align-items: center;
      padding: 4px 0 4px 0;

      &:hover {
        cursor: default;
      }

      > .icon {
        margin-left: 16px;

        > svg {
          fill: ${(props) => props.theme.iconColor};
        }
      }

      > div {
        margin-left: 13px;
      }
    }
  }
  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
