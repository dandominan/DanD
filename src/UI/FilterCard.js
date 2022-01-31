import React from "react";
import classes from './FilterCard.module.css'

const FilterCard = (props) => {
    return <div className={`${classes.filterItem} ${props.className}`}>
        {props.children}
    </div>
};

export default FilterCard;