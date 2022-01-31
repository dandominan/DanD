import React, {useState} from "react";
import FilterCard from "../../UI/FilterCard";

const FilterByPopulation = (props) => {
    
    const dropDownChangeHandler = (event) => {
        props.onChangeFilterByPop(event.target.value)
    }

    return <FilterCard>
        <div> <h3>Filter By Population</h3></div>
        <select 
        // value={props.selected} 
        onChange={dropDownChangeHandler}>
            <option value={{From: 0, To: 2000000000}}> ALL </option>
            <option value={{From: 0, To: 20000}}> less than 5 mil</option>
            <option value={[5000000, 20000000]}> 5 to 20 mil</option>
            <option value={[20000000, 100000000]}> 20 to 100 mil</option>
            <option value={[100000000, 1000000000]}> 100 mil to 1 bil</option>
            <option value={[1000000000, 2000000000]}> over 1 bil </option>
        </select>

    </FilterCard>
};

export default FilterByPopulation;