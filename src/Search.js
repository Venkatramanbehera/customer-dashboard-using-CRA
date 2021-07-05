import React from 'react'

const Search = (props) => {
    const { term, handleSearch } = props
    return (
        <input type="text" value={ term } onChange={ handleSearch }/>
    )
}

export default Search
