
import React, {useState} from "react";
import classes from './FilterArea.module.css'
import FilterCard from "../../UI/FilterCard";
import FilterByLanguage from "./FilterByLanguage";
import FilterByPopulation from "./FilterByPopulation";
import FilterByRegion from "./FilterByRegion";
import FilterByTimeZone from "./FilterByTimeZone";


const FilterArea = props => {


    return <div>
        <FilterCard className={classes.mainArea}>
        <FilterByRegion onChangeRegion={props.onChangeRegion}/>
        <FilterByLanguage onChangeLanguage={props.onChangeLanguage}/>
        <FilterByTimeZone onChangeTimeZone={props.onChangeTimeZone}/>
        </FilterCard>
        <FilterByPopulation  
        // selected={filterByPopulation}
         onChangeFilterByPop={props.onChangePopulationRange}
        
         />

    </div>
};


export default FilterArea;