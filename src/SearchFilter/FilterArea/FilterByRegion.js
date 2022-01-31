import React from "react";
import Checkbox from "../../UI/Checkbox";
import FilterCard from "../../UI/FilterCard";
import './FilterByRegion.css';

const REGIONS = ["Asia", "Africa", "Europe" , "Northern America", "South America", "Australia and New Zealand", "Antarctica"]

const FilterByRegion = (props) => {


    return <FilterCard className="region">
        
        <div className="regiondiv"> 
        <div > <h2> Filter by Region </h2></div>
        <div className="regions">
            {REGIONS.map((continent) => (
                <Checkbox className="checkboxitem"
                          label={continent} 
                          onChange={props.onChangeRegion}
                         />
            ))}
        </div>
        </div>
        
    </FilterCard>

};

export default FilterByRegion;