

import React from "react";
import FilterCard from "../UI/FilterCard";
import './SearchBar.css'

const SearchBar = (props) => {
    const searchInputHandler = (event) => {
        props.onSearchFilter(event.target.value);
        // console.log('Searchbar state  ' + enteredWord)
    }

    return <FilterCard className="search-card">
        <div className="search-wrapper">
            <label> Search </label>
            <input className="search-input" type="text" onChange={searchInputHandler}></input>
        </div>
    </FilterCard>


};

export default SearchBar;